'use strict';

const Hapi = require('@hapi/hapi');
const {login} = require("./routes/auth");

const start = async () => {

  const server = Hapi.server({
    port: 3500,
    host: 'localhost',
    routes: {
      cors: true
    }
  });

  await server.register([
    {
      plugin: require('@hapi/cookie')
    }
  ]);

  server.auth.strategy('login', 'cookie', {
    cookie: {
      name: 'session',
      password: '$2a$12$wC0hVtJH9Wtub3yd3SyjIeAB6Uq5frhHXj1UahBCX492cnG1bMgn2',
      isSecure: false
    },
    redirectTo: '/login',
    validate: async (request, session) => {

      const account = users.find(
        (user) => (user.id === session.id)
      );

      if (!account) {
        return {isValid: false};
      }

      return {isValid: true, credentials: account};
    }
  });

  server.auth.default('login');

  server.route([
    {
      method: 'GET',
      path: '/',
      handler: function (request, h) {
        return 'welcome';
      },
      options: {
        auth: {
          mode: 'required'
        }
      }
    },
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
  ]);


  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

start();
