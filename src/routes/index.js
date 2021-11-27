const homeRouter = require('./HomeRouter');
const GianAnh = require('./GianAnh')
const CoAnh = require('./CoAnh')
const Robert = require('./Robert')
const Chung = require('./Chung')

function route(app) {
    app.use('/tat-ca', Chung);
    app.use('/robert', Robert);
    app.use('/co-anh', CoAnh);
    app.use('/gian-anh', GianAnh);
    app.use('/', homeRouter);
}

module.exports = route;