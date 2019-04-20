"use strict";

const User = use("App/Models/User");

class UserController {
  async store({ request }) {
    const data = request.only(["username", "email", "password"]);

    const user = await User.create(data);
    user.firstAccess = true;

    await user.save();

    return user;
  }

  async update({ request, auth }) {
    const data = request.only([
      "front",
      "back",
      "mobile",
      "gestao",
      "marketing",
      "devops"
    ]);

    const user = await User.find(auth.jwtPayload.uid);

    user.front = data.front;
    user.back = data.back;
    user.mobile = data.mobile;
    user.gestao = data.gestao;
    user.marketing = data.marketing;
    user.devops = data.devops;
    user.firstAccess = false;

    console.log(user);

    await user.save();
  }
}

module.exports = UserController;
