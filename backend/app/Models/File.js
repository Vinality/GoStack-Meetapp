"use strict";

const Model = use("Model");
const env = use("Env");

class File extends Model {
  static get computed() {
    return ["url"];
  }

  getUrl({ id }) {
    return `${env.get("APP_URL")}/files/${id}`;
  }

  meetup () {
    return this.belongsTo('App/Models/Meetup');
  }
}

module.exports = File;
