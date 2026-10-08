const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Job = require("./models/Job");

dotenv.config();

const sampleJobs = [
  {
    jobTitle: "IoT Intern",
    company: "SmartSense Labs",
    location: "Chennai",
    category: "IoT",
    jobType: "On-site",
    applyLink: "https://example.com/jobs/iot-intern",
    description: "Sample IoT internship for demonstration purposes.",
  },
  {
    jobTitle: "Embedded Systems Intern",
    company: "Circuit Forge",
    location: "Bengaluru",
    category: "Embedded Systems",
    jobType: "Hybrid",
    applyLink: "https://example.com/jobs/embedded-intern",
    description: "Develop and test microcontroller-based projects.",
  },
  {
    jobTitle: "Electronics Design Intern",
    company: "VoltCore",
    location: "Hyderabad",
    category: "Electronics",
    jobType: "Remote",
    applyLink: "https://example.com/jobs/electronics-design",
    description: "Create PCB and circuit design concepts for student projects.",
  },
  {
    jobTitle: "Frontend Web Developer Intern",
    company: "PixelNest",
    location: "Pune",
    category: "Web Development",
    jobType: "Remote",
    applyLink: "https://example.com/jobs/frontend-web",
    description: "Build responsive web interfaces with React and JavaScript.",
  },
  {
    jobTitle: "Software Engineer Intern",
    company: "CodeBridge",
    location: "Coimbatore",
    category: "Software",
    jobType: "On-site",
    applyLink: "https://example.com/jobs/software-engineer",
    description: "Develop backend features and bug fixes for a growing product team.",
  },
  {
    jobTitle: "Embedded Firmware Intern",
    company: "NanoEdge",
    location: "Chennai",
    category: "Embedded Systems",
    jobType: "On-site",
    applyLink: "https://example.com/jobs/firmware-intern",
    description: "Work on firmware debugging and hardware testing tasks.",
  },
  {
    jobTitle: "IoT Solutions Intern",
    company: "AquaGrid",
    location: "Vellore",
    category: "IoT",
    jobType: "Hybrid",
    applyLink: "https://example.com/jobs/iot-solutions",
    description: "Support IoT dashboard development and sensor integration.",
  },
  {
    jobTitle: "Full Stack Intern",
    company: "TechHive",
    location: "Bengaluru",
    category: "Software",
    jobType: "Hybrid",
    applyLink: "https://example.com/jobs/fullstack-intern",
    description: "Work on both frontend and backend code for a student product.",
  },
];

const seedJobs = async () => {
  try {
    await connectDB();
    await Job.deleteMany({});
    await Job.insertMany(sampleJobs);
    console.log(`Inserted ${sampleJobs.length} sample jobs.`);
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
};

seedJobs();
