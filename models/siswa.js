const mongoose = require('mongoose');

const siswaSchema = new mongoose.Schema({
    nis: {
        type: String,
        required: [true, 'Silahkan Isi Nis'],
    },
    nama: {
        type: String,
        required: [true, 'Silahkan Isi Nama'],
        unique: true
    },
    kelas: {
        type: String,
        required: [true, 'Silahkan Isi Kelas'],
    },
    umur: {
        type: Number,
        required: [true, 'Silahkan Isi Umur'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    }
})

module.exports = mongoose.model('Siswa', siswaSchema)