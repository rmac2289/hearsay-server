const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function makeUsersArray() {
  return [
    {
      id: 1,
      user_name: 'test-user-1',
      full_name: 'Test user 1',
      nick_name: 'TU1',
      password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 2,
      user_name: 'test-user-2',
      full_name: 'Test user 2',
      nick_name: 'TU2',
      password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 3,
      user_name: 'test-user-3',
      full_name: 'Test user 3',
      nick_name: 'TU3',
      password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 4,
      user_name: 'test-user-4',
      full_name: 'Test user 4',
      nick_name: 'TU4',
      password: 'password',
      date_created: '2029-01-22T16:28:32.615Z',
    },
  ]
}

function makeReviewsArray(users) {
  return [
    {
      id: 1,
      state: 'teststate1',
      department: 'test dept 1',
      nature: 'testnature1',
      rating: 7,
      incident_date: '2029-01-22T16:28:32.615Z',
      review_date: '2029-01-22T16:28:32.615Z',
      comments: 'test comments 1',
      user_id: users[0].id,
    },
    {
      id: 2,
      state: 'teststate2',
      department: 'test dept 2',
      nature: 'testnature2',
      rating: 7,
      incident_date: '2029-01-22T16:28:32.615Z',
      review_date: '2029-01-22T16:28:32.615Z',
      comments: 'test comments 2',
      user_id: users[1].id, },
    {
      id: 3,
      state: 'teststate3',
      department: 'test dept 3',
      nature: 'testnature3',
      rating: 7,
      incident_date: '2029-01-22T16:28:32.615Z',
      review_date: '2029-01-22T16:28:32.615Z',
      comments: 'test comments 3',
      user_id: users[2].id,},
    {
      id: 4,
      state: 'teststate4',
      department: 'test dept 4',
      nature: 'testnature4',
      rating: 7,
      incident_date: '2029-01-22T16:28:32.615Z',
      review_date: '2029-01-22T16:28:32.615Z',
      comments: 'test comments 4',
      user_id: users[3].id,},
  ]
}

function makeDiscussionArray(users, things) {
  return [
    {
      id: 1,
      discussion_post: 'First test review!',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 2,
      discussion_post: 'Second test review!',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 3,
      discussion_post: 'Third test review!',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 4,
      discussion_post: 'Fourth test review!',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 5,
      discussion_post: 'Fifth test review!',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 6,
      discussion_post: 'Sixth test review!',
      date_created: '2029-01-22T16:28:32.615Z',
    },
    {
      id: 7,
      discussion_post: 'Seventh test review!',
      date_created: '2029-01-22T16:28:32.615Z',
    },
  ];
}

function makeExpectedReview(users, reviews) {
  const user = users
    .find(user => user.id === thing.user_id)

  const Reviews = reviews
    .filter(review => review.thing_id === Reviews.id)

  return {
    id: Reviews.id,
    state: Reviews.state,
    department: Reviews.department,
    nature: Reviews.nature,
    rating: Reviews.rating,
    incident_date: Reviews.incident_date,
    review_date: Reviews.review_date,
    comments: Reviews.comments,
    user: {
      id: user.id,
      user_name: user.user_name,
      full_name: user.full_name,
      nick_name: user.nick_name,
      date_created: user.date_created,
    },
  }
}


function makeReviewsFixtures() {
  const testUsers = makeUsersArray()
  const testReviews = makeReviewsArray(testUsers)
  return { testUsers, testReviews }
}

function cleanTables(db) {
  return db.raw(
    `TRUNCATE
      hearsay_users,
      hearsay_reviews,
      hearsay_topics,
      hearsay_discussion
      RESTART IDENTITY CASCADE`
  )
}

function seedUsers(db, users) {
    const preppedUsers = users.map(user => ({
      ...user,
      password: bcrypt.hashSync(user.password, 1)
    }))
    return db.into('hearsay_users').insert(preppedUsers)
      .then(() =>
        // update the auto sequence to stay in sync
        db.raw(
          `SELECT setval('hearsay_users_id_seq', ?)`,
          [users[users.length - 1].id],
        )
      )
  }

  function seedReviewTables(db, users,reviews) {
    // use a transaction to group the queries and auto rollback on any failure
    return db.transaction(async trx => {
      await seedUsers(trx, users)
      await trx.into('hearsay_reviews').insert(reviews)
      // update the auto sequence to match the forced id values
      await trx.raw(
        `SELECT setval('hearsay_reviews_id_seq', ?)`,
        [reviews[reviews.length - 1].id],
      )
    })
  }
    

function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
  const token = jwt.sign({ user_id: user.id }, secret, {
         subject: user.user_name,
         algorithm: 'HS256',
       })
  return `Bearer ${token}`
}

module.exports = {
  makeUsersArray,
  makeReviewsArray,
  makeDiscussionArray,
  makeReviewsArray,
  makeAuthHeader,
  makeReviewsFixtures,
  makeExpectedReview,
  cleanTables,
  seedReviewTables,
  seedUsers,
}