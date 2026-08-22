import os
import csv
import json
import requests
from io import StringIO
from datetime import datetime

# Ambil rahasia (MAP_KEY) dari Environment Github Actions
MAP_KEY = os.environ.get("FIRMS_MAP_KEY")
if not MAP_KEY:
    raise ValueError("Error: FIRMS_MAP_KEY tidak ditemukan di environment variables.")

SOURCE = "VIIRS_SNPP_NRT" # Satelit pilihan
DAY_RANGE = 1             # Data 1 hari terakhir

# BBOX Asia Tenggara & sekitarnya (West, South, East, North)
# Menjangkau seluruh Indonesia, Malaysia, Thailand, Filipina, & Aus Utara
BBOX = "90,-11,141,10" 

URL = f"https://firms.modaps.eosdis.nasa.gov/api/area/csv/{MAP_KEY}/{SOURCE}/{BBOX}/{DAY_RANGE}"

def fetch_and_process():
    print(f"[{datetime.now()}] Mengambil data dari NASA FIRMS...")
    
    # Header agar tidak di-block sebagai bot otomatis oleh NASA
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }

    try:
        # Timeout 60 detik agar tidak menggantung selamanya jika NASA lambat
        response = requests.get(URL, headers=headers, timeout=60)
        
        if response.status_code != 200:
            print(f"Error HTTP {response.status_code}: {response.text}")
            return

        csv_data = response.text
        if "Error" in csv_data or "Invalid" in csv_data:
            print(f"API Error dari NASA: {csv_data}")
            return

        # Parsing CSV dari NASA FIRMS
        reader = csv.DictReader(StringIO(csv_data))
        hotspots = []
        
        for row in reader:
            conf = row.get('confidence', '').lower()
            # Filter hanya titik api valid (high & nominal confidence)
            if conf in ['h', 'n']:
                hotspot = {
                    "lat": round(float(row['latitude']), 4),
                    "lon": round(float(row['longitude']), 4),
                    "c": conf, 
                    "f": round(float(row['frp']), 1), 
                    "d": row['acq_date'],
                    "t": row['acq_time']
                }
                hotspots.append(hotspot)
        
        print(f"Total titik api ditemukan: {len(hotspots)}")

        # Simpan sebagai file JSON
        output_file = "hazard.json"
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(hotspots, f, separators=(',', ':'))
            
        size_kb = os.path.getsize(output_file) / 1024
        print(f"[{datetime.now()}] Berhasil! File {output_file} tersimpan ({size_kb:.2f} KB)")

    except requests.exceptions.Timeout:
        print("Error: Request ke NASA FIRMS mengalami timeout (server lambat).")
    except requests.exceptions.RequestException as e:
        print(f"Error Koneksi: {e}")

if __name__ == "__main__":
    fetch_and_process()
