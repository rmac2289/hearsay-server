const express = require('express')
const path = require('path')
const ReviewsService = require('./reviews-service')

const reviewsRouter = express.Router()
const jsonBodyParser = express.json()

reviewsRouter
  .route('/')
  .get((req, res, next) => {
    ReviewsService.getAllReviews(req.app.get('db'))
      .then(reviews => {
        res.json(reviews.map(ReviewsService.serializeReview))
      })
      .catch(next)
  })
reviewsRouter
  .route('/')
  .post(jsonBodyParser, (req, res, next) => {
    const { state, department, nature, incident_date, rating, comments } = req.body 
    const newReview =  { state, department, nature, incident_date, rating, comments } 

    for (const [key, value] of Object.entries(newReview))
      if (value == null)
        return res.status(400).json({
          error: `Missing '${key}' in request body`
        })
    ReviewsService.insertReview(
      req.app.get('db'),
      newReview
    )
      .then(review => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${review.id}`))
          .json(ReviewsService.serializeReview(review))
      })
      .catch(next)
  })

reviewsRouter
  .route('/:review_id')
  .all(checkReviewExists)
  .get((req, res) => {
    res.json(ReviewsService.serializeReview(res.review))
  })

/* async/await syntax for promises */
async function checkReviewExists(req, res, next) {
  try {
    const review = await ReviewsService.getById(
      req.app.get('db'),
      req.params.review_id
    )

    if (!review)
      return res.status(404).json({
        error: `Review doesn't exist`
      })

    res.review = review
    next()
  } catch (error) {
    next(error)
  }
}



module.exports = reviewsRouter