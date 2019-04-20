"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class JoinMeetup extends Model {
  static boot() {
    super.boot();
    this.addHook('afterCreate', 'JoinMeetupHook.sendMeetupEmail');
  }

  user() {
    return this.hasOne("App/Models/User");
  }

  meetup() {
    return this.hasOne("App/Models/Meetup");
  }
}

module.exports = JoinMeetup;
