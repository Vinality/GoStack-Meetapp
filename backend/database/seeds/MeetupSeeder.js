/* eslint-disable class-methods-use-this */
/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

class MeetupSeeder {
  async run() {
    await Factory.model('App/Models/Meetup').createMany(10);
  }
}

module.exports = MeetupSeeder;
