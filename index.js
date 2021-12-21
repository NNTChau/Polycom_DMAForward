const Forwarder = require('forwarder-http')
const server = new Forwarder({
  // The servers to forward the request to
  targets: [
    {                         // Overwrite some of the default configs
      url: 'http://172.30.21.10:443',
      headers: {
        'Authorization': 'Basic YWRtaW46UG9seWNvbTEyMw==',
        'Accept':'application/vnd.plcm.plcm-device-list-v3+json'
      },
      retry: {
        maxRetries: 3
      }
    }
  ],
})
