const homeRouter = require('./HomeRouter');
const GianAnh = require('./GianAnh')
const CoAnh = require('./CoAnh')
const Robert = require('./Robert')
function route(app) {
    app.use('/robert', Robert);
    app.use('/co-anh', CoAnh);
    app.use('/gian-anh', GianAnh);
    app.use('/', homeRouter);
}

module.exports = route;