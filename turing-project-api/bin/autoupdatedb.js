var path = require('path');
var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.mysqldbc9;

console.log(app);

ds.autoupdate('Customer', function(err) {
    if (err) throw err;
    ds.disconnect();
});