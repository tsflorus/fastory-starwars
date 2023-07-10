const {searchAllCategories, searchInCategory} = require("./search");

exports.searchRoutes = [
  {
    method: 'GET',
    path: '/search/{nameToSearch}/{category?}',
    handler: function (request) {
      return searchAllCategories(request);
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
      return searchInCategory(request);
    },
    options: {
      auth: {
        mode: 'optional'
      }
    }
  }
]

// TODO: Authorization
