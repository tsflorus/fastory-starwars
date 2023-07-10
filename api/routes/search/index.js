const {searchByName, searchItem} = require("./search");

exports.searchRoutes = [
  {
    method: 'GET',
    path: '/search/{nameToSearch}/{category?}',
    handler: function (request) {
      return searchByName(request);
    },
    options: {
      auth: {
        mode: 'optional'
      }
    }
  },
  {
    method: 'POST',
    path: '/search/{id}',
    handler: function (request) {
      return searchItem(request);
    },
    options: {
      auth: {
        mode: 'optional'
      }
    }
  }
]

// TODO: Authorization
