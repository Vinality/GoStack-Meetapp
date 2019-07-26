/* eslint-disable class-methods-use-this */

const User = use('App/Models/User');

class UserController {
  async store({ request }) {
    const data = request.only(['username', 'email', 'password']);

    const user = await User.create(data);

    await user.save();

    return user;
  }

  async update({ request, auth }) {
    const data = request.only(['username', 'password']);

    const user = await User.find(auth.jwtPayload.uid);

    user.username = data.username;
    user.password = data.password;

    await user.save();
    const token = await auth.attempt(user.email, data.password);

    return token;
  }
}

module.exports = UserController;
