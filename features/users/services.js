const User = require('../../models/user');

const userService = {
  create: async function(data) {
    const record = await User
        .query()
        .insert({
          ...data,
        });
    return record;
  },
  update: async function(record, data) {
    const updatedRecord = await User
        .query()
        .findById(record.id)
        .patch({
          ...data,
          updatedAt: Date.now(),
        });
    return updatedRecord;
  },
  get: async function(email) {
    const record = await User
        .query()
        .where('email', email);
    return record;
  },
};

module.exports = userService;
