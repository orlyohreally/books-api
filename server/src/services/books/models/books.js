import { ObjectId } from "mongodb";
import { model, Schema } from "mongoose";

const BookSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    authorId: {
      type: ObjectId,
      ref: "AuthorModel",
      index: true,
      required: true,
    },
  },
  { versionKey: false, autoIndex: true }
);

export const BookModel = model("BookModel", BookSchema);
