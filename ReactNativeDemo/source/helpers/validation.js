// This is email validation function

export const emailValidationCheck = email => {
  const emailReg = /\S+@\S+\.\S+/;
  return emailReg.test(email);
};
