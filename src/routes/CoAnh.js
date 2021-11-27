const express = require('express');
const router = express.Router();

const CoAnhController = require('../app/controllers/CoAnh');

router.get('/', CoAnhController.coAnh);
router.post('/', CoAnhController.postXY);
router.post('/ket-qua', CoAnhController.tinhToan);

module.exports = router;