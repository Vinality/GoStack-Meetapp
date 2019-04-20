/* eslint-disable no-undef */
"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MeetupSchema extends Schema {
  up() {
    this.create("meetups", table => {
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");

      table
        .integer("file_id")
        .unsigned()
        .references("id")
        .inTable("files")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");

      table.string("file");
      table.string("title").notNullable();
      table.string("description").notNullable();
      table.string("location").notNullable();
      table.timestamp("when").notNullable();

      table.bool("front");
      table.bool("back");
      table.bool("mobile");
      table.bool("devops");
      table.bool("gestao");
      table.bool("marketing");
      
      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop("meetups");
  }
}

module.exports = MeetupSchema;
