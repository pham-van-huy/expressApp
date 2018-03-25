var Schema = mongoose.Schema
var UserSchema = new Schema({
    name: String,
    email: String,
    address: String
});

var UserModel = mongoose.model('users', UserSchema)

module.exports = UserModel
