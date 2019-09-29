/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */

const Meetup = use('App/Models/Meetup');
const File = use('App/Models/File');
const moment = require('moment');

/**
 * Resourceful controller for interacting with meetups
 */
class MeetupController {
  async index({ request }) {
    const params = request.all();
    const page = params.page || 1;

    const meetups = await Meetup.query()
      .with('user', builder => builder.setHidden(['password', 'token', 'token_created_at']))
      .filter(params)
      .with('file')
      .paginate(page, 10);

    return meetups;
  }

  async store({ request, response, auth }) {
    const data = request.all(['title', 'description', 'location', 'when', 'file_id']);
    const fileData = await File.findBy('id', data.file_id);
    const now = moment().format();

    if (fileData === null) {
      return response.status(401).send('Invalid file');
    }

    if (moment(data.when).isBefore(now)) {
      return response.status(401).send('Invalid date');
    }

    const meetup = await Meetup.create({
      ...data,
      user_id: auth.jwtPayload.uid,
      file_id: fileData.id,
    });

    return meetup;
  }

  async show({ params, response }) {
    const meetup = await Meetup
      .query()
      .where('id', params.id)
      .with('file')
      .with('join')
      .fetch();

    const now = moment().format();

    if (moment(meetup.when).isBefore(now)) {
      return response.status(401).send('Meetup expired');
    }

    return meetup;
  }

  async update({
    request, response, params, auth,
  }) {
    const meetup = await Meetup.find(params.id);
    const body = request.all();
    const now = moment().format();

    if (moment(meetup.when).isBefore(now)) {
      return response.status(401).send('Meetup expired');
    }

    if (meetup.user_id !== auth.jwtPayload.uid) {
      return response.status(401).send('You are not the owner');
    }

    meetup.title = body.title;
    meetup.description = body.description;

    if (moment(body.when).isBefore(now)) {
      return response.status(401).send('Invalid date');
    }
    meetup.when = body.when;
    meetup.location = body.location;

    await meetup.save();

    return meetup;
  }

  async destroy({ response, auth, params }) {
    const meetup = await Meetup.find(params.id);
    const now = moment().format();

    if (moment(meetup.when).isBefore(now)) {
      return response.status(401).send('Meetup expired');
    }

    if (meetup.user_id !== auth.jwtPayload.uid) {
      return response.status(401).send('You are not the owner');
    }

    await meetup.delete();
    return { message: 'Meetup deleted' };
  }
}

module.exports = MeetupController;
