export const createError = (status, message) => {
  const error = new Error();
  error.message = status;
  error.status = status;
  return error;
};
