const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    company_name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    profile_image:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('pos_profile', profileSchema)