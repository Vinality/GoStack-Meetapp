"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", table => {
      table.increments();
      
      table
        .string("username", 80)
        .notNullable()
        .unique();
      table
        .string("email", 254)
        .notNullable()
        .unique();

      table.string("password", 60).notNullable();
      table.timestamps();
      table.timestamp("token_created_at");
      table.string("token");
  
      table.bool("firstAccess");
      table.bool("front");
      table.bool("back");
      table.bool("mobile");
      table.bool("devops");
      table.bool("gestao");
      table.bool("marketing");
    })
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
