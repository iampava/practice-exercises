self.ports = [];

onconnect = function (e) {
  var newPort = e.ports[0];
  self.ports.push(newPort);

  newPort.onmessage = function (e) {
    self.ports.forEach(port => {
      if (port !== newPort) {
        port.postMessage(e.data);
      }
    });
  }

  newPort.postMessage({
    type: 'READY',
    data: null
  });
}