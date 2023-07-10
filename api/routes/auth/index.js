const {login} = require("./auth");

exports.authRoutes = [
  {
    method: 'POST',
    path: '/login',
    handler: function (request, h) {
      return login(request);
    },
    options: {
      auth: {
        mode: 'try'
      }
    }
  },
  {
    method: 'GET',
    path: '/logout',
    handler: function (request, h) {
      console.log('logging out');
      request.cookieAuth.clear();
      return {}
    },
    options: {
      auth: false
    }
  }
]
