const express = require('express');
const router = express.Router();

const GianAnhController = require('../app/controllers/GianAnhController');

router.get('/', GianAnhController.gianAnh);
router.post('/', GianAnhController.postXY);
router.post('/ket-qua', GianAnhController.tinhToan);

module.exports = router;