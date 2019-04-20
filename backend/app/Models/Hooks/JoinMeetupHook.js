"use strict";

const Kue = use("Kue");
const Job = use("App/Jobs/NewMeetupJoin");

const Meetup = use("App/Models/Meetup");
const User = use("App/Models/User");

const JoinMeetupHook = (exports = module.exports = {});

JoinMeetupHook.sendMeetupEmail = async modelInstance => {
  if (!modelInstance.meetup_id) return;

  const { username, email } = await User.find(modelInstance.user_id);

  const { title, when } = await Meetup.find(modelInstance.meetup_id);

  Kue.dispatch(Job.key, { username, title, when, email }, { attempts: 3 });
};
