const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/pos_billing/profile')
    },
    filename: (req, file, cb) => {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

var upload = multer({
    storage,
    fileFilter: (req, file, callback) => {
        if (file.mimetype == "image/png"  || file.mimetype == "image/jpg"|| file.mimetype=="image/jpeg" || file.mimetype=="image/svg+xml" ) {
            callback(null, true)
        } else {
            console.log("only jpg & png file suppoted!")
            callback(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})
module.exports = upload