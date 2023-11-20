import mongoose from "mongoose";

const todoSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    cratedby: {
      // this entry is made to get the name of the user who created this entry
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    // subtodos are stored in array form
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ], // array of subTodos
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
