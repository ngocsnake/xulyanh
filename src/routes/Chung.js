const express = require('express');
const router = express.Router();

const TatCaThuatToan = require('../app/controllers/Chung');

router.get('/', TatCaThuatToan.robert);
router.post('/', TatCaThuatToan.postXY);
router.post('/ket-qua', TatCaThuatToan.tinhToan);

module.exports = router;