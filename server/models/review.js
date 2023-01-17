const { Schema } = require("mongoose")

const Review = new Schema(
    {
        brewId: {type: String, require: true},
        user: {type: String, require: true},
        title: {type: String, required: true},
        body: {type: String, required: true},
        rating: {type: Number, required: true}
        
        
    },
    { timestamps: true }
)

module.exports = Review