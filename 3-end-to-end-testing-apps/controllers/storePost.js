const path = require("path")
const cloudinary = require("cloudinary")
const Post = require("../database/models/Post")

module.exports = (req, res) => {
    const { image } = req.files

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
