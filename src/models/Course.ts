import Mongoose from "mongoose";

// create a schema
var courseSchema = new Mongoose.Schema(
  {
    instructor: { type: Mongoose.Schema.Types.ObjectId, ref: "instructor" },
    name: { type: String, default: "" },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
    duration: { type: Number, default: 0 },
    isDeleted: { type: Boolean, default: false },

    // Aggregates
    lections: [
      {
        name: { type: String, default: "" },
        description: { type: String, default: "" },
        video: { type: String, default: "" },
        duration: { type: Number, default: 0 },
      },
    ],
  },
  {
    // Automatically include createdAt and updatedAt field
    timestamps: true,
    versionKey: false,
  }
);

export default Mongoose.model("course", courseSchema);
