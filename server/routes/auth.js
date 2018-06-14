var express = require('express');
import passport  from "passport";

const router = express.Router();
import * as controller from '../controller';


router.post('/sign-up',  function(req, res){
  try {
    const data = req.body.data;
    let response =  controller.auth.signUp(data);
  
    res.status(response.status).send(response);
  } catch (err) {
    throw new Error(err.message);
  }
})

router.post('/login', function(req, res){
  console.log('REQUEST AUTH', req.body)
  const credentialsData = req.body;
  controller.auth.login(credentialsData).then(resObj => {
    res.status(resObj.status).send(resObj);
  })

})

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}))

router.get('/google/back', passport.authenticate('google', {
  
}))

export {router as auth}