const ChuanHoa = require('./ChuanHoa')
class RobertController {
    // [GET] /robert
    robert(req, res, next) {
            res.render('robert')
        }
        // [POST] /robert
    postXY(req, res, next) {
            const X = req.body.X;
            const Y = req.body.Y;
            let htmls = '<h3>Nhập ma trận ảnh:</h3>';
            for (let i = 0; i < Y; i++) {
                for (let i = 0; i < X; i++) {
                    htmls += '<input class="arrayImg me-2 mt-2" type="text" name="arrayImg[]">';
                }
                htmls += '<br>';
            }
            let Hx = '<h3 class="mt-4">Nhập Hx:</h3>';
            for (let i = 0; i < 3; i++) {
                for (let i = 0; i < 3; i++) {
                    Hx += '<input class="arrayImg me-2 mt-2" type="text" name="Hx[]">';
                }
                Hx += '<br>';
            }
            let Hy = '<h3 class="mt-4">Nhập Hy:</h3>';
            for (let i = 0; i < 3; i++) {
                for (let i = 0; i < 3; i++) {
                    Hy += '<input class="arrayImg me-2 mt-2" type="text" name="Hy[]">';
                }
                Hy += '<br>';
            }
            let nguong = '<h3 class="mt-4">Nhập ngưỡng:</h3>';
            nguong += '<input class="arrayImg me-2 mt-2" type="text" name="nguong">';
            nguong += '<br><button type="submit" class="btn btn-success mt-4">Tính Toán</button>';
            res.render('robert', { htmls, Hx, Hy, X, nguong })
        }
        // [POST] /robert/ket-qua
    tinhToan(req, res, next) {
        const maTranAnh = req.body.arrayImg.map(i => Number(i));
        const Hx = req.body.Hx.map(i => Number(i));
        const Hy = req.body.Hy.map(i => Number(i));
        const nguong = Number(req.body.nguong);
        const X = Number(req.body.X);

        const iHx = ChuanHoa.nhanTichChap(maTranAnh, Hx, X);
        const iHy = ChuanHoa.nhanTichChap(maTranAnh, Hy, X);

        const iHxHtmls = ChuanHoa.arrayToHtmls(iHx, X)
        const iHyHtmls = ChuanHoa.arrayToHtmls(iHy, X)

        const iHxiHy = ChuanHoa.congHaiMang(iHx, iHy)

        const iHxiHyHtmls = ChuanHoa.arrayToHtmls(iHxiHy, X)

        const iHxiHyGTTD = ChuanHoa.congHaiMangGTTD(iHx, iHy)

        const iHxiHyHtmlsGTTD = ChuanHoa.arrayToHtmls(iHxiHyGTTD, X)

        const xetNguong = ChuanHoa.xetNguong(iHxiHyGTTD, nguong)
        const xetNguongHtmls = ChuanHoa.arrayToHtmls(xetNguong, X)

        res.render('tachnguong', { iHxHtmls, iHyHtmls, iHxiHyHtmls, iHxiHyHtmlsGTTD, nguong, xetNguongHtmls })
    }
}

module.exports = new RobertController;