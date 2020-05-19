const knex = require('knex')
const app = require('../src/app')
const helpers = require('./test-helpers')

describe('Reviews Endpoints', function() {
  let db

  const {
    testUsers,
    testReviews,
    testTopics,
    testDiscussion
  } = helpers.makeReviewsFixtures()

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    })
    app.set('db', db)
  })

  after('disconnect from db', () => db.destroy())

  before('cleanup', () => helpers.cleanTables(db))

  afterEach('cleanup', () => helpers.cleanTables(db))

  describe(`GET /api/reviews`, () => {
    context(`Given no reviews`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app)
          .get('/api/reviews')
          .expect(200, [])
      })
    })

    context('Given there are reviews in the database', () => {
      beforeEach('insert reviews', () =>
        helpers.seedReviewsTables(
          db,
          testUsers,
          testReviews,
          testTopics,
          testDiscussion
        )
      )

      it('responds with 200 and all of the reviews', () => {
        const expectedReviews = testReviews.map(review =>
          helpers.makeExpectedReview(
            testUsers,
            review
          )
        )
        return supertest(app)
          .get('/api/review')
          .expect(200, expectedReviews)
      })
    })

    context(`Given an XSS attack review`, () => {
      const testUser = helpers.makeUsersArray()[1]
      const {
        maliciousReview,
        expectedReview,
      } = helpers.makeMaliciousReview(testUser)

      beforeEach('insert malicious review', () => {
        return helpers.seedMaliciousReview(
          db,
          testUser,
          maliciousReview,
        )
      })

      it('removes XSS attack content', () => {
        return supertest(app)
          .get(`/api/reviews`)
          .expect(200)
          .expect(res => {
            expect(res.body[0].nature).to.eql(expectedReview.nature)
            expect(res.body[0].comments).to.eql(expectedReview.comments)
          })
      })
    })
  })

  describe(`GET /api/reviews/:review_id`, () => {
    context(`Given no reviews`, () => {
      beforeEach(() =>
        helpers.seedUsers(db, testUsers)
      )

      it(`responds with 404`, () => {
        const reviewId = 123456
        return supertest(app)
          .get(`/api/reviews/${reviewId}`)
          .set('Authorization', helpers.makeAuthHeader(testUsers[0]))
          .expect(404, { error: `review doesn't exist` })
      })
    })

    context('Given there are reviews in the database', () => {
      beforeEach('insert reviews', () =>
        helpers.seedReviewsTables(
          db,
          testUsers,
          testReviews
        )
      )

      it('responds with 200 and the specified review', () => {
        const reviewId = 2
        const expectedReview = helpers.makeExpectedReview(
          testUsers,
          testReviews[reviewId - 1],
        )

        return supertest(app)
          .get(`/api/reviews/${reviewId}`)
          .set('Authorization', helpers.makeAuthHeader(testUsers[0]))
          .expect(200, expectedReview)
      })
    })
  })
})
