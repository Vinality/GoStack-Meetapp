/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Hash = use('Hash');
const moment = require('moment');

Factory.blueprint('App/Models/User', async faker => ({
  username: faker.username(),
  email: faker.email(),
  password: await Hash.make(faker.password()),
}));

Factory.blueprint('App/Models/Meetup', async faker => ({
  title: faker.word(),
  description: faker.sentence({ words: 3 }),
  location: faker.sentence({ words: 3 }),
  when: moment(faker.date({ string: true, year: 2019 })).format(),
  file_id: 1,
  user_id: faker.integer({ min: 11, max: 20 }),
}));
