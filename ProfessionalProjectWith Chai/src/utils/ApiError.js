// this below code os for handling the error
// errors coming from API requests

class ApiError extends Error {
  // making a constructor to handle exceptions (error)
  constructor(
    statusCode,
    message = "Something Went wrong",
    error = [],
    statck = ""
  ) {
    // overwriting the constructor
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.error = error;

    // a professional code to handle the stack
    if (statck) {
      this.stack = statck;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
  //   professional code ends here
}

export { ApiError };
