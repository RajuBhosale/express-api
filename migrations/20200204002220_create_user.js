
const uniqid = require('uniqid');

exports.up = function(knex) {
  return knex.schema
      .createTable('users', function(table) {
        table.increments('id').primary();
        table.string('email', 255).notNullable();
        table.enu('role', ['admin', 'user']).defaultTo('user');
        table.timestamp('emailConfirmedAt');
        table.string('analyticsId', 255).defaultTo(uniqid());
        table.timestamp('createdAt', { useTz: true }).defaultTo(knex.fn.now());
        table.timestamp('updatedAt', { useTz: true }).defaultTo(knex.fn.now());
      });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
