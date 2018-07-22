const express = require('express');

import * as Controller from '../controller';
import { verifyToken } from '../services/auth';

const router = express.Router();

router.get('/:id', Controller.posts.getPostsByUserId);

router.get('/:id/friends', Controller.posts.getPostsFriends);

router.post('/', Controller.posts.createNewPost);

export { router as posts };