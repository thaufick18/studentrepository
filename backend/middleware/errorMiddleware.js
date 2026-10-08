const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  if (err.name === "CastError" && err.kind === "ObjectId") {
    return res.status(400).json({
      success: false,
      message: "Invalid MongoDB ObjectId",
    });
  }

  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((value) => value.message);
    return res.status(400).json({
      success: false,
      message: messages[0] || "Validation error",
    });
  }

  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      message: "Duplicate value entered",
    });
  }

  res.status(statusCode).json({
    success: false,
    message: err.message || "Server Error",
  });
};

module.exports = {
  notFound,
  errorHandler,
};
