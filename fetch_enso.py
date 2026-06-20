import urllib.request
import json
import os
from datetime import datetime

url = "https://www.cpc.ncep.noaa.gov/data/indices/oni.ascii.txt"

try:
    response = urllib.request.urlopen(url)
    lines = response.read().decode('utf-8').split('\n')
    lines = [line for line in lines if line.strip()]
    
    last_line = lines[-1].split()
    anomali = float(last_line[3])
    periode = last_line[0] + " " + last_line[1]
    
    if anomali >= 0.5:
        status = "El Niño"
    elif anomali <= -0.5:
        status = "La Niña"
    else:
        status = "Netral"
        
    today_str = datetime.now().strftime("%Y-%m-%d")
    
    new_entry = {
        "date": today_str,
        "oni_value": anomali,
        "status": status,
        "periode": periode
    }
    
    # 1. Buka data yang sudah ada sebelumnya
    history = []
    if os.path.exists('enso.json'):
        try:
            with open('enso.json', 'r') as f:
                content = f.read().strip()
                if content:
                    history = json.loads(content)
                    # Jika format lama adalah objek tunggal, ubah jadi list
                    if isinstance(history, dict):
                        history = [history]
        except Exception as e:
            history = []
            
    # 2. Cek apakah hari ini sudah direkam agar tidak dobel
    if len(history) > 0 and history[-1].get("date") == today_str:
        history[-1] = new_entry # Update data hari ini
    else:
        history.append(new_entry) # Tambahkan data baru
        
    # 3. Batasi maksimal 1000 baris data terbaru
    history = history[-1000:]
    
    # 4. Simpan kembali ke enso.json
    with open('enso.json', 'w') as f:
        json.dump(history, f, indent=2)
        
    print(f"Berhasil update Linimasa ENSO: {anomali} ({status}) pada {today_str}")

except Exception as e:
    print("Error:", e)
