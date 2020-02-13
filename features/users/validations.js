const getUserByEmailSchema = {
  email: {
    in: 'query',
    errorMessage: 'Email is equired',
    isEmail: true,
  },
};

const createUserSchema = {
  email: {
    in: 'body',
    errorMessage: 'Email is required',
    isEmail: true,
  },
};

module.exports = {
  getUserByEmailSchema,
  createUserSchema,
};
