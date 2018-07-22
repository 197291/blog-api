const express = require('express');

import * as Controller from '../controller';

const router = express.Router();

router.get('/search', Controller.users.getUsersByName);

export { router as users };