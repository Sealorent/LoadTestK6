# Load Test Using K6


### Using InfluxDB for save results load test

k6 run test.js \
--out json=test.json \
--out influxdb=http://load-test-db.cap.lcpare.com:8086/k6 


### Explanation

Sure. Here is an explanation of the k6 load testing script you provided in Indonesian:

// Ini adalah skrip load testing k6.
// Skrip ini mendefinisikan dua skenario: shared_iter_scenario dan per_vu_scenario.
// Skenario shared_iter_scenario akan menggunakan executor shared-iterations, yang berarti bahwa semua VUs akan berbagi set iterasi yang sama.
// Skenario per_vu_scenario akan menggunakan executor per-vu-iterations, yang berarti bahwa setiap VU akan memiliki set iterasinya sendiri.

// Skenario shared_iter_scenario akan dimulai pada 0s dan berjalan selama 100 iterasi.
// Skenario per_vu_scenario akan dimulai pada 10s dan berjalan selama 10 iterasi.

// Kedua skenario akan membuat permintaan GET ke URL https://test.k6.io/.

// Blok export const options mendefinisikan opsi global untuk load test. Dalam kasus ini, satu-satunya opsi global adalah objek scenarios, yang mendefinisikan dua skenario yang akan dijalankan.

// Blok export default function() mendefinisikan fungsi default untuk load test. Fungsi ini akan dieksekusi oleh semua VUs. Dalam kasus ini, fungsi default akan membuat permintaan GET ke URL https://test.k6.io/.

// Untuk menjalankan load test, Anda akan menggunakan perintah berikut:

// k6 run script.js

// Ini akan memulai load test dengan dua skenario yang ditentukan dalam skrip. Load test akan berjalan selama 100 detik, dan hasilnya akan disimpan di server InfluxDB yang ditentukan dalam perintah k6 run.

Berikut adalah penjelasan yang lebih rinci tentang berbagai opsi yang digunakan dalam skrip:

executor: Executor yang akan digunakan untuk menjalankan skenario. Dua executor yang tersedia adalah shared-iterations dan per-vu-iterations.
vus: Jumlah VUs yang akan digunakan untuk menjalankan skenario.
iterations: Jumlah iterasi yang akan dijalankan oleh setiap VU.
startTime: Waktu skenario akan dimulai.
scenarios: Objek yang mendefinisikan skenario yang akan dijalankan oleh load test.
options: Objek yang mendefinisikan opsi global untuk load test.
default function: Fungsi yang akan dieksekusi oleh semua VUs.
Saya harap penjelasan ini bermanfaat. Silakan beri tahu saya jika Anda memiliki pertanyaan lain.
