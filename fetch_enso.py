import urllib.request
import json

# URL resmi Data Indeks ONI (ENSO) NOAA
url = "https://www.cpc.ncep.noaa.gov/data/indices/oni.ascii.txt"

try:
    response = urllib.request.urlopen(url)
    lines = response.read().decode('utf-8').split('\n')
    
    # Hapus baris kosong
    lines = [line for line in lines if line.strip()]
    
    # Ambil baris paling terakhir (data bulan terbaru)
    last_line = lines[-1].split()
    
    # Format baris terakhir: [Musim, Tahun, Total, Anomali]
    # Contoh: ['MAM', '2024', '28.30', '+1.20']
    anomali = float(last_line[3])
    
    # Tentukan status
    if anomali >= 0.5:
        status = "El Niño"
    elif anomali <= -0.5:
        status = "La Niña"
    else:
        status = "Netral"
        
    data_json = {
        "oni_value": anomali,
        "status": status,
        "periode": last_line[0] + " " + last_line[1]
    }
    
    with open('enso.json', 'w') as f:
        json.dump(data_json, f)
        
    print(f"Berhasil update ENSO: {anomali} ({status})")

except Exception as e:
    print("Error:", e)
