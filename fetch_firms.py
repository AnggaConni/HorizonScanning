import os
import csv
import json
import sys
import time
import requests
from io import StringIO
from datetime import datetime

# Ambil MAP_KEY dari Environment Github Actions
MAP_KEY = os.environ.get("FIRMS_MAP_KEY")
if not MAP_KEY:
    print("Error: FIRMS_MAP_KEY tidak ditemukan di environment variables.")
    sys.exit(1)

SOURCE = "VIIRS_SNPP_NRT"
DAY_RANGE = 1
BBOX = "90,-11,141,10" # Asia Tenggara & Indonesia

URL = f"https://firms.modaps.eosdis.nasa.gov/api/area/csv/{MAP_KEY}/{SOURCE}/{BBOX}/{DAY_RANGE}"

def fetch_and_process():
    print(f"[{datetime.now()}] Mengambil data dari NASA FIRMS...")
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }

    # Mekanisme Retry (Coba ulang hingga 5x jika NASA memutus koneksi)
    max_retries = 5
    response = None
    
    for attempt in range(1, max_retries + 1):
        try:
            print(f"Percobaan ke-{attempt} menghubungi NASA FIRMS...")
            response = requests.get(URL, headers=headers, timeout=30)
            if response.status_code == 200:
                break
            else:
                print(f"HTTP Status {response.status_code}. Mencoba lagi dalam 5 detik...")
        except requests.exceptions.RequestException as e:
            print(f"Koneksi terputus ({e}). Mencoba lagi dalam 5 detik...")
        
        time.sleep(5)

    # Jika semua percobaan gagal, hentikan script dengan Error
    if not response or response.status_code != 200:
        print("Error Fatal: Gagal mengambil data dari NASA FIRMS setelah 5 kali percobaan.")
        sys.exit(1)

    csv_data = response.text
    if "Error" in csv_data or "Invalid" in csv_data:
        print(f"API Error dari NASA: {csv_data}")
        sys.exit(1)

    # Parsing data CSV
    reader = csv.DictReader(StringIO(csv_data))
    hotspots = []
    
    for row in reader:
        conf = row.get('confidence', '').lower()
        if conf in ['h', 'n']:
            hotspots.append({
                "lat": round(float(row['latitude']), 4),
                "lon": round(float(row['longitude']), 4),
                "c": conf, 
                "f": round(float(row['frp']), 1), 
                "d": row['acq_date'],
                "t": row['acq_time']
            })
    
    print(f"Total titik api ditemukan: {len(hotspots)}")

    # Simpan file JSON
    output_file = "hazard.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(hotspots, f, separators=(',', ':'))
        
    size_kb = os.path.getsize(output_file) / 1024
    print(f"[{datetime.now()}] Berhasil! File {output_file} tersimpan ({size_kb:.2f} KB)")

if __name__ == "__main__":
    fetch_and_process()
