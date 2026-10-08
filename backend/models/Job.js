const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
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
    location: {
      type: String,
      required: [true, "location is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "category is required"],
      enum: [
        "Electronics",
        "Embedded Systems",
        "IoT",
        "Web Development",
        "Software",
      ],
      trim: true,
    },
    jobType: {
      type: String,
      required: [true, "jobType is required"],
      enum: ["Remote", "Hybrid", "On-site"],
      trim: true,
    },
    applyLink: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);
