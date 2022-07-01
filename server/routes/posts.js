const express = require("express");
const { getPosts , createPost } = require("../controllers/posts");

const recordRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;



//once user clicks the route, this callback is called
recordRoutes.get('/', (getPosts) );
recordRoutes.post('/', (createPost) )

module.exports = recordRoutes;