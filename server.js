const express = require('express')
const cors = require('cors')
const port  = process.env.PORT || 3001
const app = express()
const db = require('./db')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(`${__dirname}/client/build`))

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'))
    })
}

const reviewController = require('./controllers/reviewController')
const { Review } = require('./models')

app.get('/api/review/:id', reviewController.getReview)
app.post('/api/review', reviewController.postReview)
app.put('/api/review/:id', reviewController.updateReview)
app.delete('/api/review/:id', reviewController.deleteReview)
app.get('/api/review', reviewController.getAllReviews)
app.get('/api/review/single/:id', reviewController.getReviewById)



// app.get('/*', (req, res) => {
//     res.sendFile(`${__dirname}/client/build/index.html`)
// })
app.listen(port, () => console.log(`Listening on port ${port}`))