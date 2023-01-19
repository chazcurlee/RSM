const {Review} = require("../models")

const getReview = async (req, res) => {

    let result = await Review.find( {brewId: `${req.params.id}`})
    res.json(result)
}

const postReview = async (req, res) => {
    let review = req.body
    Review.create(review)
    res.json(review)
}

const deleteReview = async (req, res) => {
    await Review.findByIdAndDelete(req.params.id)
    res.send("Delete affirmed")
}

const updateReview = async (req, res) => {
    await Review.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.send("Review Updated")
}

const getAllReviews = async (req, res) => {
    let result = await Review.find({})
    res.json(result)
}

const getReviewById = async (req, res) => {
    let result = await Review.findById(req.params.id)
    res.json(result)
}






module.exports ={
    getReview,
    postReview,
    deleteReview,
    updateReview,
    getAllReviews,
    getReviewById,
    
}