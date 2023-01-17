const { model } = require('mongoose')
const ReviewSchema = require("./review")

const Review = model("Review", ReviewSchema)

module.exports = {Review}