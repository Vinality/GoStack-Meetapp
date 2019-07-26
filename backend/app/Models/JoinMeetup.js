/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class JoinMeetup extends Model {
  static boot() {
    super.boot();
    this.addHook('afterCreate', 'JoinMeetupHook.sendMeetupEmail');
  }

  user() {
    return this.hasOne('App/Models/User', 'user_id', 'id');
  }

  meetup() {
    return this.hasOne('App/Models/Meetup', 'meetup_id', 'id');
  }
}

module.exports = JoinMeetup;
