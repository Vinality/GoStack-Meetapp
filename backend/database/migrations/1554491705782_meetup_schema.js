/* eslint-disable no-undef */

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class MeetupSchema extends Schema {
  up() {
    this.create('meetups', (table) => {
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL');

      table
        .integer('file_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL');

      table
        .string('title')
        .notNullable()
        .unique();
      table.string('description').notNullable();
      table.string('location').notNullable();
      table.timestamp('when').notNullable();

      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop('meetups');
  }
}

module.exports = MeetupSchema;
