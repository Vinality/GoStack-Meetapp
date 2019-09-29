/* eslint-disable no-undef */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
const MeetupFilter = use('App/ModelFilters/MeetupFilter');

class Meetup extends Model {
  static boot() {
    super.boot();
    this.addTrait('@provider:Filterable', MeetupFilter);
  }

  user() {
    return this.hasOne('App/Models/User', 'user_id', 'id');
  }

  join() {
    return this.belongsToMany('App/Models/User')
      .pivotTable('join_meetups')
      .pivotModel('App/Models/JoinMeetup');
  }

  file() {
    return this.hasOne('App/Models/File', 'file_id', 'id');
  }
}

module.exports = Meetup;
