const express = require('express');

const routerProtected = express.Router();
const routerUnprotected = express.Router();

import { posts } from './posts';
import { users } from './users';
import { auth } from './auth';
import { followers } from './followers';

routerProtected.use('/posts', posts);
routerProtected.use('/users', users);
routerProtected.use('/followers', followers);
routerUnprotected.use('/auth', auth);

export default {
  protected: routerProtected,
  unprotected: routerUnprotected
};