// This file is served by the ReloadIt server
// Use of this source code is governed by a MIT-style license that can be found in the LICENSE file.

(function() {
    var scriptTags = document.getElementsByTagName('script'),
        noElements = scriptTags.length,
        reloadItDomain = '';
    for (var i = 0; i < noElements; i++) {
        if (/reloadit\.js/.test(scriptTags[i].getAttribute('src'))) {
            reloadItDomain = scriptTags[i].getAttribute('src').replace('/reloadit.js', '');
        }
    }

    var initReloadIt = function() {
        var reloadit = io(reloadItDomain);
        reloadit.on('reloadrequest', function reloadRequest() {
            location.reload(true);
        });
    };

    var socketioScript = document.createElement('script');
    socketioScript.src = reloadItDomain + '/socket.io/socket.io.js';
    socketioScript.onload = initReloadIt;
    socketioScript.onreadystatechange = initReloadIt;
    document.body.appendChild(socketioScript);
})();
