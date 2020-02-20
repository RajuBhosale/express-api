/* eslint-disable require-jsdoc */
const uniqid = require('uniqid');
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
  async $beforeInsert(queryContext) {
    await super.$beforeInsert(queryContext);
    this.analyticsId = uniqid();
  }
  async $beforeUpdate(opt, queryContext) {
    await super.$beforeUpdate(opt, queryContext);
    this.updatedAt = new Date();
  }
}

module.exports = User;
