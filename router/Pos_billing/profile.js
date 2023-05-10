const express = require('express')
const router = express.Router()
const upload=require('../../middleware/pos_billing_profile')
const profileController = require('../../controller/Pos_billing/profile')

router.get('/profile',upload.single('profile_image'),profileController.register)




module.exports = router