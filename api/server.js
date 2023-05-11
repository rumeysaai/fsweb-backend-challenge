const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authRouter = require("./auth/auth-router");
const userRouter = require("./users/users-router");
const postRouter = require("./posts/posts-router");
const commentRouter = require("./comments/comments-router");
const { restricted } = require("./auth/auth-middleware")

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/user",restricted, userRouter);
server.use("/api/post", restricted, postRouter);
server.use("/api/comment", restricted, commentRouter);

module.exports = server;