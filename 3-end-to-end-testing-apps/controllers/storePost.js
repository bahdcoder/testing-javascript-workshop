const path = require("path")
const Post = require("../database/models/Post")

module.exports = (req, res) => {
    Post.create(
        {
            ...req.body,
            author: req.session.userId
        },
        (error, post) => {
            res.redirect("/")
        }
    )
}
