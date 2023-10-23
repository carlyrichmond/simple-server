# Simple Server
Simple JavaScript server with regular duplicate output.

## Running the server

`server.js` is a simple Express server, which can be started by:

```zsh
npm install
node server.js
```

This server exposes a single endpoint `/` that returns a single log entry as a JSON object:

```json
{"event":{"transaction_id":1,"data_set":"my-logging-app"},"message":"WARN: Unable to get an interesting response"}
```

## Logstash

One you have installed Logstash, ensuring the `config/logstash.conf` is available in the `config directory`, the sample can be run using the below command:

 ```zsh
 ./logstash/bin/logstash -f config/logstash.conf
 ```

 To ensure a successful start, you need to specify your Elasticsearch credentials in the `logstash.yml` file, and expose your `ELASTIC_CLOUD_ID` and `ELASTIC_CLOUD_AUTH` settings as environment variables to be picked up by your Logstash process.