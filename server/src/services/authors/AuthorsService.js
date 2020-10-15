import { getUTCDateNoTime } from "../../utils";

export class AuthorsService {
  constructor({ dao }) {
    this.dao = dao;
  }

  async createAuthor(author) {
    const errors = this.validateAuthor(author);
    if (errors && errors.length) {
      throw new Error(errors);
    }

    const dateOfBirth = getUTCDateNoTime(new Date(author.dateOfBirth));
    const dateOfDeath = author.dateOfDeath
      ? getUTCDateNoTime(new Date(author.dateOfDeath))
      : undefined;
    return this.dao.createAuthor({ ...author, dateOfBirth, dateOfDeath });
  }

  async getAuthors() {
    return this.dao.getAuthors();
  }

  validateAuthor(author) {
    if (!author) {
      return ["author is required"];
    }

    const errors = [];

    if (!author.dateOfBirth) {
      errors.push("dateOfBirth is required");
    }

    return errors;
  }
}
