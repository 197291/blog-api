const express = require('express');

const router = express.Router();
import * as Controller from '../controller';

router.delete('/:id',  async function(req, res, next){
  try {
    const id = req.params.id;
    const response = await Controller.followers.deleteConnection({ id });
    
    res.status(200).send({
      message: 'You was unfollowed success',
      result: 1
    });
    
  } catch(err) {
    next(new Error(err.message));
  }
})

router.post('/',  async function(req, res, next){
  try {
    const data = req.body;
    const response = await Controller.followers.createConnection(data);

    res.status(200).send({
      result: 1,
      message: 'You subscribe succesfully!'
    });
  } catch(err) {
    next(new Error(err.message));
  }
})

export {router as followers}