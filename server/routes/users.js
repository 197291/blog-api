const express = require('express');
const router = express.Router();

import * as Controller from '../controller';
import { verifyToken } from '../services/auth';

router.get('/search', verifyToken, Controller.users.getUsersByName)

export {router as users}