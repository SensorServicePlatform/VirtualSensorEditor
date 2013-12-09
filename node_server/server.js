var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin' : '*'
    });

	var url = require('url');

    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;

    if("/getall" === url_parts.pathname)
    {
        var fs_r = require('fs');

        fs_r.readFile('database', function (err, data) {
            if (err) throw err;
            response.end(data);
        });
    }
    else if("/add" === url_parts.pathname)
    {
        var fs_r = require('fs');

        fs_r.readFile('database', function (err, data) {
            if (err) throw err;
            database = JSON.parse(data);
            newSensor = JSON.parse(query['vs']);
            newSensorName = query['name']
            database['VIRTUAL_SENSORS'][newSensorName] = newSensor;
            
            var fs_w = require('fs');

            fs_w.writeFile('database', JSON.stringify(database), function (err) {
                if (err) throw err;
                response.end("OK");
                console.log("Added " + JSON.stringify(database));
            });
        });

    }

}).listen(1337);