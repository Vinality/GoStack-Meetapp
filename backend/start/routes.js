"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use("Route");

Route.post("users", "UserController.store");
Route.post("session", "SessionController.store");

Route.post("passwords", "ForgotPasswordController.store");
Route.put("passwords", "ForgotPasswordController.update");

Route.post("/files", "FileController.store");

Route.group(() => {
  Route.get("/files/:id", "FileController.show");
  Route.put("/firstaccess", "UserController.update");
  Route.resource("meetups", "MeetupController").apiOnly();
  Route.post("/joinmeetup", "JoinMeetupController.store");
  Route.get("/joinmeetup/:id", "JoinMeetupController.index");
  Route.get("/recommended", "MeetupController.showRecommended");
  Route.get("/subscribed", "MeetupController.showSubscribed");
}).middleware(["auth"]);
