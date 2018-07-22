const express = require('express');
import passport  from "passport";

const router = express.Router();
import * as Controller from '../controller';

router.post('/sign-up', Controller.auth.signUp);

router.post('/login', Controller.auth.signIn);

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}))

router.get('/google/back', passport.authenticate('google', {
  
}))

export { router as auth };