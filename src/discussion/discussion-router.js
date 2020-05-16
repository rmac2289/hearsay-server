const express = require('express')
const path = require('path')
const DiscussionService = require('./discussion-service')
const { requireAuth } = require('../middleware/jwt-auth')

const discussionRouter = express.Router()
const jsonBodyParser = express.json()

discussionRouter
  .route('/')
  .get((req, res, next) => {
    DiscussionService.getAllPosts(req.app.get('db'))
      .then(discussion => {
        res.json(discussion.map(DiscussionService.serializeDiscussion))
      })
      .catch(next)
  })
  .post(requireAuth, jsonBodyParser, (req, res, next) => {
    const { discussion_post, topic_name } = req.body 
    const newDiscussionPost =  { discussion_post, topic_name } 

    for (const [key, value] of Object.entries(newDiscussionPost))
      if (value == null)
        return res.status(400).json({
          error: `Missing '${key}' in request body`
        })

      newDiscussionPost.user_id = req.user.id
      newDiscussionPost.nick_name = req.user.nick_name
    DiscussionService.insertDiscussionPost(
      req.app.get('db'),
      newDiscussionPost
    )
      .then(discussion => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${discussion.id}`))
          .json(DiscussionService.serializeDiscussion(discussion))
      })
      .catch(next)
  })

discussionRouter
  .route('/topics')
  .get((req, res, next) => {
    DiscussionService.getAllTopics(req.app.get('db'))
      .then(topic => {
        res.json(topic.map(DiscussionService.serializeTopics))
      })
      .catch(next)
  })

discussionRouter
  .route('/:discussion_id')
  .all(checkDiscussionExists)
  .get((req, res) => {
    res.json(DiscussionService.serializeDiscussion(res.discussion))
  })

/* async/await syntax for promises */
async function checkDiscussionExists(req, res, next) {
  try {
    const discussion = await DiscussionService.getById(
      req.app.get('db'),
      req.params.discussion_id
    )

    if (!discussion)
      return res.status(404).json({
        error: `Discussion doesn't exist`
      })

    res.discussion = discussion
    next()
  } catch (error) {
    next(error)
  }
}



module.exports = discussionRouter