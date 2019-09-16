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

// Autenticação e Sessões
Route.post('users', 'UserController.store');
Route.post('session', 'SessionController.store');

// Atualização de senha
Route.post('passwords', 'ForgotPasswordController.store');
Route.put('passwords', 'ForgotPasswordController.update');

// Upload de arquivos
Route.post('/files', 'FileController.store');
Route.get('/files/:id', 'FileController.show');

Route.group(() => {
  Route.put('/users/update', 'UserController.update');
  Route.resource('meetups', 'MeetupController').apiOnly();
  Route.get('/meetups/owner', 'OrganizerController.index');
  Route.post('/joinmeetup/:id', 'JoinMeetupController.store');
  Route.get('/joinmeetup', 'JoinMeetupController.index');
  Route.get('/meetups/subscribed', 'MeetupController.showSubscribed');
}).middleware(['auth']);
