const bcrypt = require('bcryptjs')

function makeUsersArray() {
  return [
    {
      user_name: 'test-user-1',
      full_name: 'Test user 1',
      nick_name: 'TU1',
      password: 'password',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
    },
    {
      user_name: 'test-user-2',
      full_name: 'Test user 2',
      nick_name: 'TU2',
      password: 'password',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
    },
    {
      user_name: 'test-user-3',
      full_name: 'Test user 3',
      nick_name: 'TU3',
      password: 'password',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
    },
    {
      user_name: 'test-user-4',
      full_name: 'Test user 4',
      nick_name: 'TU4',
      password: 'password',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
    },
  ]
}

function makeReviewsArray(users) {
  return [
    {
        state: 'Alabama',
        department:'Birmingham Police Department',
        nature:'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
        rating:9,
        incident_date:'2018-05-22',
        review_date:'2019-09-09 04:58:22',
        comments:'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 
        user_id: 1
    },
    {
        state: 'Wisconsin',
        department: 'Madison Police Department',
        nature:'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
        rating:3,
        incident_date:'2016-08-04',
        review_date:'2019-12-05 23:27:02',
        comments:'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 
        user_id:2
    },
    {
        state: 'California',
        department: 'Berkeley Police Department',
        nature:'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
        rating:4,
        incident_date:'2020-01-20',
        review_date:'2020-01-26 18:15:10',
        comments:'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 
        user_id:3
    },
    {
        state: 'California',
        department: 'Escondido Police Department',
        nature:"Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        rating:7,
        incident_date:'2019-09-03',
        review_date:'2019-09-08 01:23:23',
        comments:'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 
        user_id:4
    },
    {
        state: 'California',
        department: 'San Bernardino Police Department',
        nature:'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
        rating:7,
        incident_date:'2020-01-25',
        review_date:'2020-01-27 07:53:53',
        comments:'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 
        user_id:5
    },
    {
        state: 'Pennsylvania',
        department: 'Pittsburgh Police Department',
        nature: 'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
        rating: 7,
        incident_date: '2019-05-03',
        review_date: '2019-05-29 07:55:45',
        comments: 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 
        user_id: 6
    },
  ]
}

function makeDiscussionArray(users, topics) {
  return [
    {discussion_post: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', topic_name: 'Police Brutality'},
    {discussion_post:'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',topic_name: 'Juvenile Justice'},
    {discussion_post:'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',topic_name:'Race'},
    {discussion_post:'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',topic_name:'War on Drugs'},
    {discussion_post: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',topic_name:'Capital Punishment'},
    {discussion_post:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',topic_name: 'Random'},
  ];
}
function makeTopicsArray(){
  return [
    {topic_name: 'Police Brutality'},
    {topic_name:'Criminal Justice Reform'},
    {topic_name:'War on Drugs'},
    {topic_name:'What the System is Doing Well'},
    {topic_name:'Capital Punishment'},
    {topic_name:'Crime Prevention'},
    {topic_name:'Juvenile Justice'},
    {topic_name:'Police-Community Relations'},
    {topic_name:'Prison System'},
    {topic_name:'Race'},
    {topic_name:'Random'},
    {topic_name:'Forensic Science'}
  ]
}

function makeExpectedReview(users, review) {
  const user = users
    .find(user => user.id === review.user_id)

  return {
    id: review.id,
    state: review.state,
    department: review.department,
    nature: review.nature,
    
    rating: review.rating,
    user: {
      id: user.id,
      user_name: user.user_name,
      full_name: user.full_name,
      nick_name: user.nick_name,
      date_created: user.date_created.toISOString(),
      date_modified: user.date_modified || null,
    },
  }
}

function makeExpectedDiscussion(users, discussions, topics) {
  const expectedDiscussion = discussion
    .filter((discussion )=> discussion.topic_name === topicId)

  return expectedDiscussions.map(discussion => {
    const discussionUser = users.find(user => user.id === discussion.user_id)
    return {
      id: discussion.id,
      discussion_post: discussion.discussion_post,
      date_created: discussion.date_created.toISOString(),
      topic_name: discussion.topic_name,
      user: {
        id: discussionUser.id,
        user_name: discussionUser.user_name,
        full_name: discussionUser.full_name,
        nick_name: discussionUser.nick_name,
        date_created: discussionUser.date_created.toISOString(),
        date_modified: discussionUser.date_modified || null,
      }
    }
  })
}


function makeReviewsFixtures() {
  const testUsers = makeUsersArray()
  const testReviews = makeReviewsArray(testUsers)
  const testTopics = makeTopicsArray(testUsers)
  const testDiscussions = makeDiscussionArray(testUsers, testTopics)
  
  return { testUsers, testReviews, testDiscussions, testTopics }
}

function cleanTables(db) {
  return db.transaction(trx =>
    trx.raw(
      `TRUNCATE
        hearsay_users,
        hearsay_reviews,
        hearsay_topics,
        hearsay_discussion
      `
    )
    .then(() =>
      Promise.all([
        trx.raw(`ALTER SEQUENCE hearsay_reviews_id_seq minvalue 0 START WITH 1`),
        trx.raw(`ALTER SEQUENCE hearsay_users_id_seq minvalue 0 START WITH 1`),
        trx.raw(`ALTER SEQUENCE hearsay_discussion_id_seq minvalue 0 START WITH 1`),
        trx.raw(`ALTER SEQUENCE hearsay_topics_id_seq minvalue 0 START WITH 1`),
        trx.raw(`SELECT setval('hearsay_reviews_id_seq', 0)`),
        trx.raw(`SELECT setval('hearsay_users_id_seq', 0)`),
        trx.raw(`SELECT setval('hearsay_topics_id_seq', 0)`),
        trx.raw(`SELECT setval('hearsay_discussion_id_seq', 0)`),
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

function seedReviewsTables(db, users, reviews) {
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


function makeAuthHeader(user) {
  const token = Buffer.from(`${user.user_name}:${user.password}`).toString('base64')
  return `Basic ${token}`
}

module.exports = {
  makeUsersArray,
  makeReviewsArray,
  makeExpectedReview,
  makeDiscussionArray,
  makeExpectedDiscussion,
  makeReviewsFixtures,
  cleanTables,
  seedReviewsTables,
  makeAuthHeader,
  seedUsers,
}
