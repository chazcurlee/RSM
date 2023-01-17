const express = require('express')
const cors = require('cors')
const PORT  = process.env.PORT || 3001
const app = express()
const db = require('./db')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(`${__dirname}/client/build`))



const reviewController = require('./controllers/reviewController')
const { Review } = require('./models')

app.get('/review/:id', reviewController.getReview)
app.post('/review', reviewController.postReview)
app.put('/review/:id', reviewController.updateReview)
app.delete('/review/:id', reviewController.deleteReview)
app.get('/review', reviewController.getAllReviews)
app.get('/review/single/:id', reviewController.getReviewById)



// app.get('/*', (req, res) => {
//     res.sendFile(`${__dirname}/client/build/index.html`)
// })
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))