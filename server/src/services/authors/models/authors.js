import { model, Schema } from "mongoose";

const AuthorSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    biography: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    dateOfDeath: Date,
  },
  { versionKey: false, autoIndex: true }
);

export const AuthorModel = model("AuthorModel", AuthorSchema);
