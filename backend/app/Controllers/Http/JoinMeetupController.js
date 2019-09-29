/* eslint-disable class-methods-use-this */
const Join = use('App/Models/JoinMeetup');
const Meetup = use('App/Models/Meetup');
const moment = require('moment');

class JoinMeetupController {
  async index({ auth }) {
    const now = moment().format();
    const join = await Join.query()
      .where('user_id', auth.jwtPayload.uid)
      .andWhere('when', '>', now)
      .orderBy('when', 'asc')
      .with('meetup')
      .fetch();

    return join;
  }

  async store({ params, auth, response }) {
    try {
      const { id } = params;
      const meet = await Meetup.findOrFail(id);
      const now = moment();

      if (meet.user_id === auth.jwtPayload.uid) {
        throw new Error('Você é o organizador do evento');
      }

      if (moment(meet.when).isBefore(now)) {
        throw new Error('Esse evento ja ocorreu');
      }

      await Join.create({
        meetup_id: id,
        user_id: auth.jwtPayload.uid,
        when: meet.when,
      });

      const meetup = await Meetup
        .query()
        .where({ id })
        .with('join')
        .with('file')
        .fetch();

      return meetup;
    } catch (err) {
      return response.status(400).send(err.message);
    }
  }

  // async update({ params, request, response }) {}

  async destroy({ auth, params, response }) {
    const { id } = params;
    try {
      await Join
        .query()
        .where('user_id', auth.jwtPayload.uid)
        .andWhere('meetup_id', id)
        .delete();

      const meetup = await Meetup
        .query()
        .where({ id })
        .with('join')
        .with('file')
        .fetch();

      return meetup;
    } catch (err) {
      return response.status(400).send(err.message);
    }
  }
}

module.exports = JoinMeetupController;
