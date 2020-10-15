import { AuthorModel } from "./models/authors";

export class AuthorsDao {
  async createAuthor(author) {
    const newAuthor = new AuthorModel(author);
    await newAuthor.save();
    return newAuthor.toJSON();
  }

  async getAuthors() {
    return AuthorModel.find();
  }
}
