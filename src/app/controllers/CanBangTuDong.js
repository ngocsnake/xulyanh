const ChuanHoa = require('./ChuanHoa')
class CanBangTuDong {
    // [GET] /can-bang-tu-dong
    index(req, res, next) {
        res.render('can-bang-tu-dong')
    }

    // [POST] /can-bang-tu-dong
    postXY(req, res, next) {
        const newlevelCheck = req.body.newlevelCheck;
        const X = req.body.X;
        const Y = req.body.Y;
        let htmls = '<h3>Nhập ma trận ảnh:</h3>';
        for (let i = 0; i < Y; i++) {
            for (let i = 0; i < X; i++) {
                htmls += '<input class="arrayImg me-2 mt-2" type="text" name="arrayImg[]">';
            }
            htmls += '<br>';
        }
        htmls += '<button type="submit" class="btn btn-success mt-4">Tính Toán</button>';
        res.render('can-bang-tu-dong', { htmls, X })
    }

    // [POST] /can-bang-tu-dong/ket-qua
    tinhToan(req, res, next) {
        const maTranAnhCu = req.body.arrayImg.map(i => Number(i));
        const maTranAnh = req.body.arrayImg.map(i => Number(i));
        const sort_maTranAnh = ChuanHoa.sort_unique(maTranAnh);
        const outputArray = [];
        const X = Number(req.body.X);
        const newlevel = Number(req.body.newlevel);

        const length = maTranAnh.length;
        const rule = [];
        const maTranCu = ChuanHoa.arrayToHtmls3(maTranAnhCu, X);

        let tg = 0;
        let omega = 0;
        const TB = length / newlevel;
        let mg = 0;
        for (let i = 0; i < sort_maTranAnh.length; i++) {
            const element = sort_maTranAnh[i];
            const count = maTranAnh.count(element);
            tg += count;
            const tgTb = (Math.round(tg / TB));
            const ghg = element * count;
            omega += ghg;
            mg = Math.round((omega / tg) * 100) / 100;
            outputArray.push({
                g: element,
                hg: count,
                tg: tg,
                ghg: ghg,
                omega: omega,
                mg: mg
            });
        };
        let iMax = 0;
        let fgMax = 0;
        for (let i = 0; i < outputArray.length; i++) {
            const element = outputArray[i];
            let fg = (element.tg / (length - element.tg)) * Math.pow((element.mg - mg), 2)
            fg = Math.round(fg * 100) / 100
            if (isNaN(fg))
                fg = '∞';
            rule.push({
                old: element.g,
                new: fg
            })
            if (fg > fgMax) {
                fgMax = fg;
                iMax = element.g;
            }
            element.fg = fg
        }
        const htmlsOutput = `Ngưỡng cần tách θ = ${iMax} ứng với f(θ) = f(${iMax}) = ${fgMax}`
        res.render("can-bang-tu-dong-ket-qua", { outputArray, htmlsOutput });
    }
}

module.exports = new CanBangTuDong;