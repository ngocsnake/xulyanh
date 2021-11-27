const express = require('express');
const router = express.Router();

const RonertController = require('../app/controllers/Robert');

router.get('/', RonertController.robert);
router.post('/', RonertController.postXY);
router.post('/ket-qua', RonertController.tinhToan);

module.exports = router;