import Mongoose from "mongoose";

const schema = new Mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: String,
  },
  { timestamps: true, versionKey: false }
);

export default Mongoose.model("user", schema);
