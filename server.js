// Use of this source code is governed by a MIT-style license that can be found in the LICENSE file.
(function() {
    var config = require('konfig')(),
        app = require('express')(),
        http = require('http').Server(app),
        io = require('socket.io')(http);

    app.get('/', function(req, res) {
        res.send(
            'Hi, this is the ReloadIt server running. Please include the following code in your page\'s source:' +
            '<pre>&lt;script src="http://' + config.app.hostname + ':' + config.app.port + '/reloadit.js" async=true&gt;' +
            '&lt;/script&gt;</pre>'
        );
    });

    app.get('/reloadit.js', function(req, res) {
        res.sendFile(__dirname + '/reloadit.js');
    });

    app.get('/reloadrequest', function(req, res) {
        console.log('Received reloading request.');
        io.emit('reloadrequest', {});
        res.status(204).end();
    });

    http.listen(config.app.port, config.app.hostname, function() {
        console.log('ReloadIt server running at http://' + config.app.hostname + ':' + config.app.port);
    });
})();
