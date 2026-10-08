const Application = require("../models/Application");

const allowedStatuses = ["Applied", "Interview", "Selected", "Rejected"];

const getApplications = async (req, res, next) => {
  try {
    const { status } = req.query;
    const filter = {};

    if (status) {
      if (!allowedStatuses.includes(status)) {
        return res.status(400).json({
          success: false,
          message: "Invalid application status",
        });
      }
      filter.status = status;
    }

    const applications = await Application.find(filter).sort({ applicationDate: -1 });

    res.status(200).json({
      success: true,
      data: applications,
    });
  } catch (error) {
    next(error);
  }
};

const getApplicationById = async (req, res, next) => {
  try {
    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    res.status(200).json({
      success: true,
      data: application,
    });
  } catch (error) {
    next(error);
  }
};

const createApplication = async (req, res, next) => {
  try {
    const application = await Application.create(req.body);

    res.status(201).json({
      success: true,
      data: application,
      message: "Application created successfully",
    });
  } catch (error) {
    next(error);
  }
};

const updateApplication = async (req, res, next) => {
  try {
    const application = await Application.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    res.status(200).json({
      success: true,
      data: application,
      message: "Application updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

const deleteApplication = async (req, res, next) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Application deleted successfully",
      data: application,
    });
  } catch (error) {
    next(error);
  }
};

const getApplicationCount = async (req, res, next) => {
  try {
    const count = await Application.countDocuments();

    res.status(200).json({
      success: true,
      count,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getApplications,
  getApplicationById,
  createApplication,
  updateApplication,
  deleteApplication,
  getApplicationCount,
};
