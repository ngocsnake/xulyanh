class ChuanHoa {
    xetNguong(arr, nguong) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if (element >= nguong) {
                result.push(1)
            } else {
                result.push(0)
            }
        }

        return result;
    }
    congHaiMang(arr1, arr2) {
        const result = [];
        for (let i = 0; i < arr1.length; i++) {
            result.push(arr1[i] + arr2[i]);
        }

        return result;
    }
    congHaiMangGTTD(arr1, arr2) {
        const result = [];
        for (let i = 0; i < arr1.length; i++) {
            result.push(Math.abs(arr1[i]) + Math.abs(arr2[i]));
        }

        return result;
    }
    nhanTichChap(maTranAnh, H, X) {
        let iH = [];
        let z = 0;
        for (let i = 0; i < maTranAnh.length - X; i++) {
            z++;
            if (z == (X)) {
                z = 0;
                continue;
            }
            let giaTriMoi =
                maTranAnh[i] * H[0] +
                maTranAnh[i + 1] * H[1] +
                maTranAnh[i + X] * H[2] +
                maTranAnh[i + X + 1] * H[3]

            iH.push(giaTriMoi);
        }
        return iH;
    }
    nhanTichChap2(maTranAnh, H, X) {
        let iH = [];
        let z = 0;
        for (let i = 0; i < maTranAnh.length - 2 * X; i++) {
            z++;
            if (z == (X - 1)) {
                z = 0;
                i++;
                continue;
            }
            let giaTriMoi =
                maTranAnh[i] * H[0] +
                maTranAnh[i + 1] * H[1] +
                maTranAnh[i + 2] * H[2] +
                maTranAnh[i + X] * H[3] +
                maTranAnh[i + X + 1] * H[4] +
                maTranAnh[i + X + 2] * H[5] +
                maTranAnh[i + X + X] * H[6] +
                maTranAnh[i + X + X + 1] * H[7] +
                maTranAnh[i + X + X + 2] * H[8];

            iH.push(giaTriMoi);
        }
        return iH;
    }
    arrayToHtmls(arr, X) {
        let htmls = '';
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if (i % (X - 1) == 0 && i != 0) {
                htmls += '<span class="ketqua">*</span><br>'
            }
            htmls += `<span class="ketqua">${element}</span>`
        }
        htmls += `<span class="ketqua">*</span><br>`

        for (let i = 0; i < X; i++) {
            htmls += '<span class="ketqua">*</span>'
        }
        return htmls;
    }
    arrayToHtmls2(arr, X) {
        let htmls = '';
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if (i % (X - 2) == 0 && i != 0) {
                htmls += '<span class="ketqua">*</span><span class="ketqua">*</span><br>'
            }
            htmls += `<span class="ketqua">${element}</span>`
        }
        htmls += `<span class="ketqua">*</span><span class="ketqua">*</span><br>`

        for (let i = 0; i < 2 * X; i++) {
            if (i == X) {
                htmls += '<br>'
            }
            htmls += '<span class="ketqua">*</span>'
        }
        return htmls;
    }
    getNewArray(oldArray, X) {
        const arrayImg = oldArray;
        let newArrayImg = [];
        let z = 0;
        for (let i = X + 1; i < arrayImg.length - X - 1; i++) {
            newArrayImg.push(i);
            ++z;
            if (z === X - 2) {
                z = 0;
                i += 2;
            }
        }
        return newArrayImg;
    }
    getStructArray(arrayS) {
        let elementStruct = [];
        for (let i = 0; i < arrayS.length; i++) {
            if (arrayS[i] == 1)
                elementStruct.push(i);
        }
        return elementStruct;
    }
    giaTriMoi(d, X) {
        return d == 0 ? -X - 1 :
            d == 1 ? -X :
            d == 2 ? -X + 1 :
            d == 3 ? -1 :
            d == 4 ? 0 :
            d == 5 ? +1 :
            d == 6 ? +X - 1 :
            d == 7 ? +X :
            +X + 1;

    }
}

module.exports = new ChuanHoa;