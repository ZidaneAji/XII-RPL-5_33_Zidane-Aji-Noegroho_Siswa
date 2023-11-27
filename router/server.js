const express = require('express');
const router = express.Router()
const siswacontroller = require('../controllers/siswacontoller')

router.get('/getsiswa', siswacontroller.getsiswa)

router.get('/get/:id', siswacontroller.getbyid)

router.post('/siswa', siswacontroller.addsiswa)

router.put('/update/:id', siswacontroller.updatesiswa)

router.delete('/delete/:id', siswacontroller.hapussiswa)

module.exports = router;