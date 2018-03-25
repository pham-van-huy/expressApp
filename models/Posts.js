var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId;
var PostSchema = new Schema({
    user_id: ObjectId,
    title: String,
    content: String
})

var PostModel = mongoose.model('posts', PostSchema)

module.exports = PostModel