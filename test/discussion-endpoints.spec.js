const knex = require('knex')
const app = require('../src/app')
const helpers = require('./test-helpers')

describe('Discussion Endpoints', function() {
  let db

  const {
    testUsers,
    testTopics,
    testDiscussions,
    
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

  describe(`POST /api/discussion`, () => {
    beforeEach('insert discussion_post', () =>
      helpers.seedDiscussionTables(
        db,
        testUsers,
        testTopics
      )
    )

    it(`creates a discussion_post, responding with 201 and the new post`, function() {
      this.retries(3)
      const testUser = testUsers[0]
      const testTopic = testTopics[0]
      const newPost = {
        discussion_post: 'Test new post',
        topic_name: testTopic.topic_name
      }
      return supertest(app)
        .post('/api/discussion')
        .set('Authorization', helpers.makeAuthHeader(testUser))
        .send(newPost)
        .expect(201)
        .expect(res => {
          expect(res.body.discussion_post).to.eql(newPost.discussion_post)
          expect(res.body.topic_name).to.eql(newPost.topic_name)
          expect(res.body.user.id).to.eql(newPost.user_id)
          expect(res.body).to.have.property('id')
          expect(res.headers.location).to.eql(`/api/discussion/${res.body.id}`)
          const expectedDate = new Date().toLocaleString('en', { timeZone: 'UTC' })
          const actualDate = new Date(res.body.date_created).toLocaleString()
          expect(actualDate).to.eql(expectedDate)
        })
    })

    const requiredFields = ['discussion_post']

    requiredFields.forEach(field => {
      const testDiscussion = testDiscussions[0]
      const testUser = testUsers[0]
      const newPost = {
        discussion_post: 'Test new post',
      }

      it(`responds with 400 and an error message when the '${field}' is missing`, () => {
        delete newPost[field]

        return supertest(app)
          .post('/api/discussion')
          .set('Authorization', helpers.makeAuthHeader(testUser))
          .send(newPost)
          .expect(400, {
            error: `Missing '${field}' in request body`,
          })
      })
    })
  })
})
