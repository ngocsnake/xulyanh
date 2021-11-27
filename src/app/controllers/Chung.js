const ChuanHoa = require('./ChuanHoa')
class TatCaThuatToan {
    // [GET] /tat-ca
    robert(req, res, next) {
        res.render('tat-ca')
    }

    // [POST] /tat-ca
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
            res.render('tat-ca', { htmls, Hx, Hy, X, nguong })
        }
        // [POST] /tat-ca/ket-qua
    tinhToan(req, res, next) {
        const maTranAnh = req.body.arrayImg.map(i => Number(i));
        const Hx = req.body.Hx.map(i => Number(i));
        const Hy = req.body.Hy.map(i => Number(i));
        const nguong = Number(req.body.nguong);
        const X = Number(req.body.X);

        const iHx = ChuanHoa.nhanTichChap2(maTranAnh, Hx, X);
        const iHy = ChuanHoa.nhanTichChap2(maTranAnh, Hy, X);

        const iHxHtmls = ChuanHoa.arrayToHtmls2(iHx, X)
        const iHyHtmls = ChuanHoa.arrayToHtmls2(iHy, X)

        const iHxiHy = ChuanHoa.congHaiMang(iHx, iHy)

        const iHxiHyHtmls = ChuanHoa.arrayToHtmls2(iHxiHy, X)

        const iHxiHyGTTD = ChuanHoa.congHaiMangGTTD(iHx, iHy)

        const iHxiHyHtmlsGTTD = ChuanHoa.arrayToHtmls2(iHxiHyGTTD, X)

        const xetNguong = ChuanHoa.xetNguong(iHxiHyGTTD, nguong)
        const xetNguongHtmls = ChuanHoa.arrayToHtmls2(xetNguong, X)

        res.render('tachnguong', { iHxHtmls, iHyHtmls, iHxiHyHtmls, iHxiHyHtmlsGTTD, nguong, xetNguongHtmls })
    }
}

module.exports = new TatCaThuatToan;