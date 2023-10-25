# Load Test Using K6


# Using InfluxDB for save results load test

k6 run test.js \
--out json=test.json \
--out influxdb=http://load-test-db.cap.lcpare.com:8086/k6 
