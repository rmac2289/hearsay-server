const xss = require('xss')

const ReviewsService = {
  getById(db, id) {
    return db
      .from('hearsay_reviews AS rev')
      .select(
        'rev.id',
        'rev.rating',
        'rev.comments',
        'rev.date',
        'rev.state',
        'rev.department',
        'rev.nature',
        'rev.user_id',
        db.raw(
          `row_to_json(
            (SELECT tmp FROM (
              SELECT
                usr.id,
                usr.user_name,
                usr.full_name,
                usr.nick_name,
                usr.date_created,
                usr.date_modified
            ) tmp)
          ) AS "user"`
        )
      )
      .leftJoin(
        'hearsay_users AS usr',
        'rev.user_id',
        'usr.id',
      )
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
    return {
      id: review.id,
      rating: review.rating,
      comments: xss(review.comments),
      nature: xss(review.nature),
      state: review.state,
      department: review.department,
      date: review.date,
      user_id: review.user_id || {},
    }
  }
}

module.exports = ReviewsService