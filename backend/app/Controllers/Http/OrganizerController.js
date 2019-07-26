/* eslint-disable class-methods-use-this */
const Meetup = use('App/Models/Meetup');

class OrganizerController {
  async index({ auth }) {
    const allMeetups = await Meetup.query()
      .where('user_id', auth.jwtPayload.uid)
      .fetch();

    return allMeetups;
  }
}

module.exports = OrganizerController;
