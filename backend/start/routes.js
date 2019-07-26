/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
*/

const Route = use('Route');

Route.post('users', 'UserController.store');
Route.post('session', 'SessionController.store');

Route.post('passwords', 'ForgotPasswordController.store');
Route.put('passwords', 'ForgotPasswordController.update');

Route.post('/files', 'FileController.store');

Route.group(() => {
  Route.get('/files/:id', 'FileController.show');
  Route.put('/users/update', 'UserController.update');
  Route.resource('meetups', 'MeetupController').apiOnly();
  Route.get('/organized', 'OrganizerController.index');
  Route.post('/joinmeetup/:id', 'JoinMeetupController.store');
  Route.get('/joinmeetup', 'JoinMeetupController.index');
  Route.get('/subscribed', 'MeetupController.showSubscribed');
}).middleware(['auth']);
