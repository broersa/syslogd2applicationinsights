var config = require('config');
var syslogd = require('./syslogd/rfc5424.js');
var appInsights = require('applicationinsights');

appInsights.setup(config.syslogd2applicationinsights_key)
  // .setAutoCollectRequests(false)
  // .setAutoCollectPerformance(false)
  // .setAutoCollectExceptions(false)
  .start();

syslogd(function(info) {
  // 'Emergency Alert Critical Error Warning Notice Informational Debug'
  var sev = 0;
  switch (info.severity) {
    case 0: sev = 4; // ContractsModule.SeverityLevel.Critical;
            break;
    case 1: sev = 4; // ContractsModule.SeverityLevel.Critical;
            break;
    case 2: sev = 4; // ContractsModule.SeverityLevel.Critical;
            break;
    case 3: sev = 3; // ContractsModule.SeverityLevel.Error;
            break;
    case 4: sev = 2; // ContractsModule.SeverityLevel.Warning;
            break;
    case 5: sev = 1; // ContractsModule.SeverityLevel.Information;
            break;
    case 6: sev = 1; // ContractsModule.SeverityLevel.Information;
            break;
    case 7: sev = 0; // ContractsModule.SeverityLevel.Verbose;
            break;
  }
  appInsights.client.trackTrace(info.msg, sev);
}).listen(514, function(error) {
  if (error) {
    return console.log(error);
  }
  console.log('start')
})
