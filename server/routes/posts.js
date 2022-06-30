const express = require("express");
const { getPosts } = require("../controllers/posts");

const recordRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

import {getPosts} from '../controllers/posts'

//once user clicks the route, this callback is called
recordRoutes.get('/', (getPosts) );

module.exports = recordRoutes;