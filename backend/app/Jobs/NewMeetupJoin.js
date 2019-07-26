/* eslint-disable class-methods-use-this */
const Mail = use('Mail');

class NewMeetupJoin {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency() {
    return 1;
  }

  // This is required. This is a unique key used to identify this job.
  static get key() {
    return 'NewMeetupJoin-job';
  }

  // This is where the work is done.
  async handle({
    username, title, when, email,
  }) {
    await Mail.send(
      ['emails.newmeetup'],
      {
        username,
        title,
        when,
      },
      (message) => {
        message
          .to(email)
          .from('vinality@teste.com', 'Vinality | Testador')
          .subject('Novo meetup no Meetapp');
      },
    );
  }
}

module.exports = NewMeetupJoin;
