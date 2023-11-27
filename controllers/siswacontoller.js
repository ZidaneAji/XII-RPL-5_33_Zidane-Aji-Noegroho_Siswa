const siswaSchema = require('../models/siswa')

module.exports = {
    getsiswa: async (req, res) => {
        try {
            const students = await siswaSchema.find()
            if(students.length > 0){
                res.status(200).json({
                    status: true,
                    data: students,
                    method: req.method,
                    url: req.url
                })
            }else{
                res.json({
                    status: false,
                    message: "Siswa Masih Kosong"
                })
            }
        } catch (error) {
            res.status(400).json({sucess: false})
        }
    },
    getbyid: async (req, res) => {
        try {
            const students = await siswaSchema.findById(req.params.id)
            res.status(200).json({
                status: true,
                data: students,
                method: req.method,
                url: req.url,
                message: "Siswa Berhasil Didapat"
            })
        } catch (error) {
            res.status(400).json({sucess: false})
        }
    },
    addsiswa: async (req, res) => {
        try {
            const students = await siswaSchema.create(req.body)
            res.status(200).json({
                status: true,
                data: students,
                method: req.method,
                url: req.url,
                message: "Siswa Berhasil Ditambahkan"
            })
        } catch (error) {
            res.status(400).json({sucess: false})
        }
    },
    updatesiswa: async (req, res) => {
        try {
            const students = await siswaSchema.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.status(200).json({
                status: true,
                data: students,
                method: req.method,
                url: req.url,
                message: "Siswa Berhasil Diubah"
            })
        } catch (error) {
            res.status(400).json({sucess: false})
        }
    },
    hapussiswa: async (req, res) => {
        try {
            await siswaSchema.findByIdAndDelete(req.params.id)
            res.status(200).json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Siswa Berhasil Dihapus"
            })
        } catch (error) {
            res.status(400).json({sucess: false})
        }
    }
}