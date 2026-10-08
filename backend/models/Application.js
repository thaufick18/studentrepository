const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: [true, "studentName is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    jobTitle: {
      type: String,
      required: [true, "jobTitle is required"],
      trim: true,
    },
    company: {
      type: String,
      required: [true, "company is required"],
      trim: true,
    },
    applicationDate: {
      type: Date,
      required: [true, "applicationDate is required"],
    },
    status: {
      type: String,
      required: [true, "status is required"],
      enum: ["Applied", "Interview", "Selected", "Rejected"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Application", applicationSchema);
