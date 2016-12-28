# syslogd2applicationinsights
syslogd daemon that forwards the log lines to an azure application insights instance

Start the docker image:

```
docker run --rm -d -p 514:514/udp -e "SYSLOGD2APPLICATIONINSIGHTS_KEY=<appinsightskey>" --name syslogd syslogd
```

Add the following to the docker-compose.yml

```
    logging:
      driver: syslog
      options:
        syslog-address: "udp://127.0.0.1:514"
        syslog-format: rfc5424micro
```

or add the equivelent to the docker run command
