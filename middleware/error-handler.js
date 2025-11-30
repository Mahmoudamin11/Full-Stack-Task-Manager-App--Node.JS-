const { CustomAPIError } = require("../errors/custom-error");

const errorHandlerMiddleware = (error, req, res, next) => {
  console.log("Error debug : ", error);
  if (error instanceof CustomAPIError)
    return res.status(error.statusCode).json({ msg: error.message });
  return res
    .status(error.status)
    .json({ msg: "Something went wrong, please try again later..." });
};

module.exports = errorHandlerMiddleware;
