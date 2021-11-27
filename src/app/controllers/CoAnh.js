const ChuanHoa = require('./ChuanHoa')
class CoAnhController {
    // [GET] /co-anh
    coAnh(req, res, next) {
        res.render('co-anh')
    }
    // [POST] /co-anh
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
        let arrayS = '<h3 class="mt-4">Nhập ma trận cấu trúc:</h3>';
        for (let i = 0; i < 3; i++) {
            for (let i = 0; i < 3; i++) {
                arrayS += '<input class="arrayImg me-2 mt-2" type="text" name="arrayS[]">';
            }
            arrayS += '<br>';
        }
        arrayS += '<button type="submit" class="btn btn-success mt-4">Tính Toán</button>';
        res.render('co-anh', { htmls, arrayS, X })
    }
    // [POST] /co-anh/ket-qua
    tinhToan(req, res, next) {
        const arrayImg = req.body.arrayImg;

        //realArray là loại bỏ lớp 0 bao bên ngoài
        const realArrayImg = ChuanHoa.getNewArray(req.body.arrayImg, Number(req.body.X));

        //arrayS là những vị trí số 1 của mảng điều kiện
        const arrayS = ChuanHoa.getStructArray(req.body.arrayS);

        let resultArray = [];

        for (let i = 0; i < realArrayImg.length; i++) {

            const el = realArrayImg[i]; //vị trí thật của mảng
            let newValue = 1;

            for (let j = 0; j < arrayS.length; j++) {
                const element = arrayS[j];
                const viTriThucTe = el + ChuanHoa.giaTriMoi(element, Number(req.body.X));
                if (arrayImg[viTriThucTe] == 0) {
                    newValue = 0;
                    break;
                }
            }
            resultArray.push(newValue);
        }
        let result = '';
        for (let i = 0; i < resultArray.length; i++) {
            const element = resultArray[i];
            if (i % (Number(req.body.X) - 2) == 0 && i != 0) {
                result += '<br>'
            }
            if (element == 1)
                result += `<span class="ketqua red">${element}</span>`
            else
                result += `<span class="ketqua">${element}</span>`
        }
        res.render('co-anh', { result })
    }
}

module.exports = new CoAnhController;