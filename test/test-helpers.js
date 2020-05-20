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
      incident_date: new Date('2029-01-22T00:00:00.000Z'),
      review_date: new Date('2029-01-22T16:28:32.615Z'),
      comments: 'test comments 1',
      user_id: users[0].id,
    },
    {
      id: 2,
      state: 'teststate2',
      department: 'test dept 2',
      nature: 'testnature2',
      rating: 7,
      incident_date: new Date('2029-01-22T00:00:00.000Z'),
      review_date: new Date('2029-01-22T16:28:32.615Z'),
      comments: 'test comments 2',
      user_id: users[1].id, },
    {
      id: 3,
      state: 'teststate3',
      department: 'test dept 3',
      nature: 'testnature3',
      rating: 7,
      incident_date: new Date('2029-01-22T00:00:00.000Z'),
      review_date: new Date('2029-01-22T16:28:32.615Z'),
      comments: 'test comments 3',
      user_id: users[2].id,},
    {
      id: 4,
      state: 'teststate4',
      department: 'test dept 4',
      nature: 'testnature4',
      rating: 7,
      incident_date: new Date('2029-01-22T00:00:00.000Z'),
      review_date: new Date('2029-01-22T16:28:32.615Z'),
      comments: 'test comments 4',
      user_id: users[3].id,},
  ]
}

function makeDiscussionArray(users, topics) {
  return [
    {
      id: 1,
      discussion_post: 'First test review!',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
      topic_name: topics[0].topic_name,
      user_id: users[0].id
    },
    {
      id: 2,
      discussion_post: 'Second test review!',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
      topic_name: topics[1].topic_name,
      user_id: users[1].id
    },
    {
      id: 3,
      discussion_post: 'Third test review!',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
      topic_name: topics[2].topic_name,
      user_id: users[2].id
    },
    {
      id: 4,
      discussion_post: 'Fourth test review!',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
      topic_name: topics[3].topic_name,
      user_id: users[3].id
    },
    {
      id: 5,
      discussion_post: 'Fifth test review!',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
      topic_name: topics[4].topic_name,
      user_id: users[0].id
    },
    {
      id: 6,
      discussion_post: 'Sixth test review!',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
      topic_name: topics[5].topic_name,
      user_id: users[1].id
    },
    {
      id: 7,
      discussion_post: 'Seventh test review!',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
      topic_name: topics[6].topic_name,
      user_id: users[2].id
    },
  ];
}
function makeTopicsArray(){
  return [
    {id:1,topic_name:'Police Brutality'},
    {id:2,topic_name:'Criminal Justice Reform'},
    {id:3,topic_name:'War on Drugs'},
    {id:4,topic_name:'What the System is Doing Well'},
    {id:5,topic_name:'Capital Punishment'},
    {id:6,topic_name:'Crime Prevention'},
    {id:7,topic_name:'Juvenile Justice'},
    {id:8,topic_name:'Police-Community Relations'},
    {id:9,topic_name:'Prison System'},
    {id:10,topic_name:'Race'},
    {id:11,topic_name:'Random'},
    {id:12,topic_name:'Forensic Science'}
  ]
}

function makeExpectedReview(users, reviews) {
  const user = users
    .find(user => user.id === reviews.user_id)

  return {
    id: reviews.id,
    state: reviews.state,
    department: reviews.department,
    nature: reviews.nature,
    rating: reviews.rating,
    incident_date: new Date(reviews.incident_date).toISOString(),
    review_date: new Date(reviews.review_date).toISOString(),
    comments: reviews.comments,
    user: user.id
  }
}


function makeReviewsFixtures() {
  const testUsers = makeUsersArray()
  const testReviews = makeReviewsArray(testUsers)
  const testTopics = makeTopicsArray()
  const testDiscussions = makeDiscussionArray(testUsers, testTopics)
  return { testUsers, testReviews, testTopics, testDiscussions }
}

function cleanTables(db) {
  return db.transaction(trx =>
    trx.raw(
    `TRUNCATE
      hearsay_users,
      hearsay_reviews,
      hearsay_topics,
      hearsay_discussion`
  )
  .then(() =>
      Promise.all([
        trx.raw(`ALTER SEQUENCE hearsay_reviews_id_seq minvalue 0 START WITH 1`),
        trx.raw(`ALTER SEQUENCE hearsay_users_id_seq minvalue 0 START WITH 1`),
        trx.raw(`ALTER SEQUENCE hearsay_topics_id_seq minvalue 0 START WITH 1`),
        trx.raw(`ALTER SEQUENCE hearsay_discussion_id_seq minvalue 0 START WITH 1`),
        trx.raw(`SELECT setval('hearsay_reviews_id_seq', 0)`),
        trx.raw(`SELECT setval('hearsay_users_id_seq', 0)`),
        trx.raw(`SELECT setval('hearsay_topics_id_seq', 0)`),
        trx.raw(`SELECT setval('hearsay_discussion_id_seq', 0)`)
      ])
    )
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
  function seedTopics(db, topics) {
    const preppedTopics = topics.map(topic => ({
      ...topic,
      topic_name: topic.topic_name
    }))
    return db.into('hearsay_topics').insert(preppedTopics)
      .then(() => 
        db.raw(
          `SELECT setval('hearsay_topics_id_seq', ?)`,
          [topics[topics.length - 1].id]
        ))
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
  function seedDiscussionTables(db, users, topics, discussions){
    return db.transaction(async trx => {
      await seedUsers(trx,users)
      await seedTopics(trx, topics)
      await trx.into('hearsay_discussion').insert(discussions)
      
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
  makeTopicsArray,
  makeReviewsFixtures,
  makeExpectedReview,
  seedDiscussionTables,
  seedTopics,
  cleanTables,
  seedReviewTables,
  seedUsers,
}