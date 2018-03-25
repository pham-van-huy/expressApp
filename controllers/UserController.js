var Users = require('../models/Users')

module.exports = {
    index(req, res) {
        Users.findOne(function (err, result) {
            console.log(result)
            res.render('user', {'title': result.name, data: result})
        })
    },
    show(req, res) {

    },
    create(req, res) {

    },
    store(req, res) {
        
    }
}