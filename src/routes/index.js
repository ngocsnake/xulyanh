const homeRouter = require('./HomeRouter');
const GianAnh = require('./GianAnh')
const CoAnh = require('./CoAnh')
const Robert = require('./Robert')
const Chung = require('./Chung')
const Histogram = require('./Histogram')
const CanBangTuDong = require('./CanBangTuDong')

function route(app) {
    app.use('/can-bang-tu-dong', CanBangTuDong);
    app.use('/histogram', Histogram);
    app.use('/tat-ca', Chung);
    app.use('/robert', Robert);
    app.use('/co-anh', CoAnh);
    app.use('/gian-anh', GianAnh);
    app.use('/', homeRouter);
}

module.exports = route;