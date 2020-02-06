/* eslint-disable require-jsdoc */
const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'users';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email'],
      properties: {
        id: { type: 'integer' },
        email: { type: 'string' },
        role: {
          type: 'string',
          enum: ['user', 'admin'],
        },
        emailConfirmedAt: {
          type: 'string',
          format: 'date-time',
        },
        analyticsId: { type: 'string' },
      },
    };
  }
}

module.exports = User;
