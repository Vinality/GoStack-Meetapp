"use strict";

const Join = use("App/Models/JoinMeetup");

class JoinMeetupController {
  async index({ params }) {
    const join = await Join.query().where("meetup_id", params.id).fetch();

    return join;
  }

  async store({ request, auth }) {
    const data = await request.only(["meetup_id"]);

    const joinMeetup = await Join.create({...data, user_id: auth.jwtPayload.uid})

    return joinMeetup;
  }

  // async update({ params, request, response }) {}

  // async destroy({ params, request, response }) {}
}

module.exports = JoinMeetupController;
