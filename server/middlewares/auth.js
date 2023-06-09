export const localVariables = (req, res, next) => {
  res.app.locals = {
    OTP: null,
    resetStatus: false,
    CODE: null,
  };

  next();
};
