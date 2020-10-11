const express = require('express')
const router = express.Router()

const controller = require('../controllers/reprogramaControllers')


//@route POST criar
//@desc Creates a post by body
//@access Public
//@endpoint http://localhost:3001/criar
router.post('/criar', controller.createNewPost)


// @route DELETE deletar
// @desc Delete a post
// @acess public
// @endepoint http://localhost:3001/deletar/:id
router.delete('/deletar/:id', controller.deletePost)


// @route GET show
// @desc Show list of posts
// @acess public
// @endepoint http://localhost:3001/show
router.get('/show', controller.showPosts)


module.exports = router