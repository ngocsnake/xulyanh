const express = require('express');
const router = express.Router();

const HistogramController = require('../app/controllers/Histogram');

router.get('/', HistogramController.index);
router.post('/', HistogramController.postXY);
router.post('/ket-qua', HistogramController.tinhToan);

module.exports = router;