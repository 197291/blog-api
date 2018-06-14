const express = require('express');

const router = express.Router();

import { posts } from './posts';
import { users } from './users';
import { auth } from './auth';
import { followers } from './followers';

router.use('/posts', posts);
router.use('/users', users);
router.use('/followers', followers);
router.use('/auth', auth);

export default router;