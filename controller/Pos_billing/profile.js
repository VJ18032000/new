const Profile = require('../../model/Pos_billing/profile')


const register = (req, res, next) => {
    res.send(401,"Connected...")
    const profile = new Profile({
        company_name: req.body.company_name,
        address: req.body.address,
    })
    if (req.file) {
        profile.profile_image = req.file.path
    }
    profile.save()
    .then(data => {    
            const resdata = {
                "status": "Success",
                "message": "profile save",
                "result":data,
                "error": {}
            }
            res.json(resdata)
        })
        .catch(err => {
            const resdata = {
                "status": "Error",
                "message": "",
                "result": {},
                "errors": {
                    "errors": {
                        "message": `${err.message}`,
                        "type": `${err.name}`
                    }
                }
            }
            res.json(resdata)
        })
}



module.exports = {
    register
}