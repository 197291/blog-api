const express = require('express');

const router = express.Router();
import * as Controller from '../controller';

router.get('/:id',  async function(req, res, next){
  try {
    const id = req.params.id;
    const response = await Controller.posts.getPostsByUserId(id);

    res.status(200).send(response);
  } catch(err) {
    next(new Error(err.message));
  }
})

router.get('/:id/friends',  async function(req, res, next){
  try {
    const id = req.params.id;
    const response = await Controller.posts.getPostsFriends(id);
    
    res.status(200).send(response);
  } catch (err) {
    next(new Error(err.message));
  }
})

router.post('/',  async function(req, res, next){
  try {
    const data = req.body;
    const response = await Controller.posts.createNewPost(data);

    res.status(201).send(response);
  } catch(err) {
    next(new Error(err.message));
  }
})

export {router as posts}