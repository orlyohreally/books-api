import { Router } from "express";
const asyncHandler = require("express-async-handler");

export class AuthorsRouter {
  constructor({ service }) {
    this.router = Router();
    this.service = service;

    this.router.get("/authors/", asyncHandler(this.getAuthors.bind(this)));
    this.router.post("/authors/", asyncHandler(this.createAuthor.bind(this)));
  }

  async getAuthors(req, res) {
    const authors = await this.service.getAuthors();
    return res.status(200).json({ authors });
  }

  async createAuthor(req, res) {
    const { author } = req.body;

    const newAuthor = await this.service.createAuthor(author);
    return res.status(200).json({ author: newAuthor });
  }
}
