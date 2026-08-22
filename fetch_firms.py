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

SOURCE = "VIIRS_SNPP_NRT" # Bisa diganti ke MODIS_NRT jika perlu
DAY_RANGE = 1             # Ambil data 1 hari terakhir agar ukuran file tetap kecil
BBOX = "-180,-90,180,90"  # Bounding Box Global (seluruh dunia)

URL = f"https://firms.modaps.eosdis.nasa.gov/api/area/csv/{MAP_KEY}/{SOURCE}/{BBOX}/{DAY_RANGE}"

def fetch_and_process():
    print(f"[{datetime.now()}] Mengambil data global dari NASA FIRMS...")
    response = requests.get(URL)
    
    if response.status_code != 200:
        print(f"Error HTTP {response.status_code}: {response.text}")
        return

    csv_data = response.text
    if "Error" in csv_data or "Invalid" in csv_data:
        print(f"API Error: {csv_data}")
        return

    # Parsing CSV dari NASA FIRMS
    reader = csv.DictReader(StringIO(csv_data))
    hotspots = []
    
    for row in reader:
        # Optimasi: Filter hanya titik api valid (high/nominal confidence)
        conf = row.get('confidence', '').lower()
        if conf in ['h', 'n']:
            # Pangkas nama variabel agar JSON lebih ringan (contoh: 'latitude' jadi 'lat')
            hotspot = {
                "lat": round(float(row['latitude']), 4),
                "lon": round(float(row['longitude']), 4),
                "c": conf, 
                "f": round(float(row['frp']), 1), 
                "d": row['acq_date'],
                "t": row['acq_time']
            }
            hotspots.append(hotspot)
    
    print(f"Total titik api valid seluruh dunia: {len(hotspots)}")

    # Simpan sebagai file JSON statis
    output_file = "hazard.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        # separators=(',', ':') digunakan untuk menghilangkan spasi kosong (minify format)
        json.dump(hotspots, f, separators=(',', ':'))
        
    size_kb = os.path.getsize(output_file) / 1024
    print(f"[{datetime.now()}] Berhasil! File {output_file} tersimpan ({size_kb:.2f} KB)")

if __name__ == "__main__":
    fetch_and_process()
