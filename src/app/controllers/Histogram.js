const ChuanHoa = require('./ChuanHoa')
class Histogram {
    // [GET] /histogram
    index(req, res, next) {
        res.render('histogram')
    }

    // [POST] /histogram
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
        if (newlevelCheck != null) {
            htmls += '<h3 class="mt-4">Nhập new level:</h3><input class="arrayImg me-2 mt-2" type="text" name="newlevel"><br>';
        }
        htmls += '<button type="submit" class="btn btn-success mt-4">Tính Toán</button>';
        res.render('histogram', { htmls, X })
    }

    // [POST] /histogram/ket-qua
    tinhToan(req, res, next) {
        const maTranAnhCu = req.body.arrayImg;
        const maTranAnh = req.body.arrayImg.map(i => Number(i));
        const sort_maTranAnh = ChuanHoa.sort_unique(maTranAnh);
        const outputArray = [];
        //L là số lớn nhất trong mảng
        const L = sort_maTranAnh[sort_maTranAnh.length - 1];
        const X = Number(req.body.X);
        const newlevel = Number(req.body.newlevel);

        const length = maTranAnh.length;
        const rule = [];
        const maTranCu = ChuanHoa.arrayToHtmls3(maTranAnhCu, X);


        if (req.body.newlevel != null) {
            let tg = 0;
            const TB = length / newlevel;
            for (let i = 0; i < sort_maTranAnh.length; i++) {
                const element = sort_maTranAnh[i];
                const count = maTranAnh.count(element);
                tg += count;
                const tgTb = (Math.round(tg / TB));
                const fg = Math.max(0, tgTb - 1);

                rule.push({
                    old: element,
                    new: fg
                })

                outputArray.push({
                    g: element,
                    hg: count,
                    tg: tg,
                    fg: fg

                });
            };
            const maTranMoi = ChuanHoa.lamMoiMaTran(maTranAnhCu, rule);
            const maTranMoiHtmls = ChuanHoa.arrayToHtmls3(maTranMoi, X);
            res.render("histogramnewlevel", { outputArray, maTranCu, maTranMoiHtmls });
        } else {
            let sum = 0;
            let st = '';
            let spriStr = '';
            let s;
            for (let i = 0; i < sort_maTranAnh.length; i++) {
                const element = sort_maTranAnh[i];

                const count = maTranAnh.count(element);
                const pri = count / length;
                sum += pri;
                const sreal = Math.round(((L - 1) * sum) * 100) / 100;
                const sround = Math.round((L - 1) * sum);
                st += `P(${element}) + `;
                spriStr += count + "/" + length + " + ";
                if (i < 3)
                    s = `S(${element}) = 6 * [${st.substring(0, st.length - 3)}] = 6 * [${spriStr.substring(0, st.length - 3)}] = ${sreal} ≈ ${sround}`;
                else
                    s = `S(${element}) = ${sreal} ≈ ${sround}`;
                if (i === 2) {
                    s += '<br><br>Tính tương tự ta có: <br>'
                }
                rule.push({
                    old: element,
                    new: sround
                })
                outputArray.push({
                    num: element,
                    count: count,
                    pri: count + "/" + length,
                    s: s,
                });
            };


            const maTranMoi = ChuanHoa.lamMoiMaTran(maTranAnhCu, rule);
            const maTranMoiHtmls = ChuanHoa.arrayToHtmls3(maTranMoi, X);
            res.render("histogramketqua", { outputArray, maTranCu, maTranMoiHtmls });
        }
    }
}

module.exports = new Histogram;