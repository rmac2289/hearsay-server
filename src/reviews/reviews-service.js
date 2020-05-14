const xss = require('xss')

const ReviewsService = {
  getAllReviews(db) {
    return db
      .from('hearsay_reviews AS rev')
      .select(
        'rev.id',
        'rev.state',
        'rev.department',
        'rev.nature',
        'rev.rating',
        'rev.incident_date',
        'rev.review_date',
        'rev.comments',
        db.raw(
          `json_strip_nulls(
            json_build_object(
              'id', usr.id,
              'user_name', usr.user_name,
              'full_name', usr.full_name,
              'nick_name', usr.nick_name,
              'date_created', usr.date_created,
              'date_modified', usr.date_modified
            )
          ) AS "user"`
        )
      )
      .leftJoin(
        'hearsay_users AS usr',
        'rev.user_id',
        'usr.id',
      )
      .groupBy('rev.id', 'usr.id')
  },

  getById(db, id) {
    return ReviewsService.getAllReviews(db)
      .where('rev.id', id)
      .first()
  },
  insertReview(db, newReview) {
    return db
      .insert(newReview)
      .into('hearsay_reviews')
      .returning('*')
      .then(([review]) => review)
      .then(review =>
        ReviewsService.getById(db, review.id)
      )
  },

  serializeReview(review) {
    const { user } = review
    return {
      id: review.id,
      state: review.state,
      department: review.department,
      rating: review.rating,
      nature: xss(review.nature),
      incident_date: review.incident_date,
      review_date: new Date(review.review_date),
      comments: xss(review.comments),
      user: user.id || {},
    }
  }
}

module.exports = ReviewsService