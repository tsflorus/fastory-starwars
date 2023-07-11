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
      request.cookieAuth.clear();
      return {}
    },
    options: {
      auth: false
    }
  }
]
