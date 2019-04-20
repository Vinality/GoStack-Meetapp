"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class JoinMeetupSchema extends Schema {
  up() {
    this.create("join_meetups", table => {
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");

      table
        .integer("meetup_id")
        .unsigned()
        .references("id")
        .inTable("meetups")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");

      table.unique(["meetup_id", "user_id"]);
      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop("join_meetups");
  }
}

module.exports = JoinMeetupSchema;
