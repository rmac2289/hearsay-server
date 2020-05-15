const xss = require('xss')

const DiscussionService = {
  getAllTopics(db) {
    return db
      .from('hearsay_topics AS top')
      .select(
        'top.id',
        'top.topic_name'
      )
  },
  getAllPosts(db) {
    return db
      .from('hearsay_discussion AS dis')
      .select(
        'dis.id',
        'dis.date_created',
        'dis.discussion_post',
        'dis.topic_name',
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
        'dis.user_id',
        'usr.id',
      )
      .groupBy('dis.id', 'usr.id')
  },

  getById(db, id) {
    return DiscussionService.getAllPosts(db)
      .where('dis.id', id)
      .first()
  },
  insertDiscussionPost(db, newDiscussionPost) {
    return db
      .insert(newDiscussionPost)
      .into('hearsay_discussion')
      .returning('*')
      .then(([discussion]) => discussion)
      .then(discussion =>
        DiscussionService.getById(db, discussion.id)
      )
  },
  serializeTopics(topics) {
    const { user } = topics
    return {
      id: topics.id,
      topic_name: topics.topic_name
    }
  },

  serializeDiscussion(discussion) {
    const { user } = discussion
    return {
      id: discussion.id,
      date_created: new Date(discussion.date_created),
      discussion_post: xss(discussion.discussion_post),
      topic_name: discussion.topic_name,
      user: user.id || {},
    }
  }
}

module.exports = DiscussionService