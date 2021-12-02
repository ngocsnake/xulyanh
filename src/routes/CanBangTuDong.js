const express = require('express');
const router = express.Router();

const CanBangTuDongController = require('../app/controllers/CanBangTuDong');

router.get('/', CanBangTuDongController.index);
router.post('/', CanBangTuDongController.postXY);
router.post('/ket-qua', CanBangTuDongController.tinhToan);

module.exports = router;