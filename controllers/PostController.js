var Post = require('../models/Posts')
var User = require('../models/Users')

module.exports = {
    store(req, res) {
        User.findOne(function (err, result) {
            let user_id = result._id
            Post.create({
                user_id: user_id,
                title: req.body.title,
                content: req.body.content
            }, function (err, post) {
                res.render('posts/show', {title: post.title, data: post})
            })
        })
    },
    create(req, res) {
        res.render('posts/create', {title: 'Create a new post'})
    },
    index(req, res) {
        Post.find(function (err, result) {
            res.render('posts/index', { title: 'List posts', data: result})
        })
    }
}