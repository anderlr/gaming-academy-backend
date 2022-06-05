import Mongoose from "mongoose"

// create a schema
var lectionSchema = new Mongoose.Schema(
  {
    course: { type: Mongoose.Schema.Types.ObjectId, ref: "course" },
    name: { type: String, default: "" },
    description: { type: String, default: "" },
    video: { type: String, default: "" },
    duration: { type: Number, default: 0 },
    isDeleted: { type: Boolean, default: false },
  },
  {
    // Automatically include createdAt and updatedAt field
    timestamps: true,
    versionKey: false
  }
)

export default Mongoose.model("lection", lectionSchema)