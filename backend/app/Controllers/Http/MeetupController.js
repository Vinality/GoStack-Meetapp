/* eslint-disable no-undef */
"use strict";

const Meetup = use("App/Models/Meetup");
const User = use("App/Models/User");
const moment = require("moment");

/**
 * Resourceful controller for interacting with meetups
 */
class MeetupController {
  async index() {
    const meetups = await Meetup.all();

    const now = moment();

    return meetups;
  }

  async store({ request, auth }) {
    const data = request.only([
      "title",
      "description",
      "location",
      "when",
      "file",
      "file_id",
      "front",
      "back",
      "mobile",
      "devops",
      "gestao",
      "marketing"
    ]);

    const meetup = Meetup.create({ ...data, user_id: auth.jwtPayload.uid });

    return meetup;
  }

  async show({ params }) {
    const meetup = await Meetup.find(params.id);

    return meetup;
  }

  async showRecommended({ auth }) {
    const user = await User.find(auth.jwtPayload.uid);
    var meetups = [];

    if (user.front) {
      let front = await Meetup.findBy("front", true);
      meetups = meetups.concat(front);
    }
    if (user.back) {
      let back = await Meetup.findBy("back", true);
      meetups = meetups.concat(back);
    }
    if (user.mobile) {
      let mobile = await Meetup.findBy("mobile", true);
      meetups = meetups.concat(mobile);
    }
    if (user.devops) {
      let devops = await Meetup.findBy("devops", true);
      meetups = meetups.concat(devops);
    }
    if (user.gestao) {
      let gestao = await Meetup.findBy("gestao", true);
      meetups = meetups.concat(gestao);
    }
    if (user.marketing) {
      let marketing = await Meetup.findBy("marketing", true);
      meetups = meetups.concat(marketing);
    }

    return meetups;
  }

  async showSubscribed({ auth }) {
    const user = await User.find(auth.jwtPayload.uid);

    const meetups = await Meetup.query()
      .where("user_id", user.id)
      .fetch();

    return meetups;
  }
}

module.exports = MeetupController;
