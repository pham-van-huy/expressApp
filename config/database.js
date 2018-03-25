var mongoose = require('mongoose')

mongoose.connect(process.env.CONNECT_MOGO_DB)

module.exports = mongoose