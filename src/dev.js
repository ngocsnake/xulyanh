const path = require('path'); //LẤY DIR PATH
const express = require('express');
var exphbs = require('express-handlebars');
const route = require('./routes');


const app = express();

const port = 3004;
app.listen(port)



const helper = require('../src/app/helpers')

// templates engine
app.engine('hbs', exphbs({
    extname: '.hbs',
    helpers: {}
}));

app.set('view engine', 'hbs');

var views = path.join(__dirname, 'resources', 'views');
var static = path.join(__dirname, 'resources', 'public');

app.set('views', views);
app.use(express.static(static));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


console.log(`===========> http://localhost:${port}/`);




/////////////////////////////////////////////////////////////
// auto exec nmp run watch khi chạy start app

var spawn = require("child_process").spawn,
    child;
child = spawn("powershell.exe", ["npm run watch"]);
child.stdout.on("data", function(data) {
    console.log("Powershell Data: " + data);
});
child.stderr.on("data", function(data) {
    console.log("Powershell Errors: " + data);
});
child.on("exit", function() {
    console.log("Powershell Script finished");
});
child.stdin.end();

/////////////////////////////////////////////////////////////////

//Route init
route(app);