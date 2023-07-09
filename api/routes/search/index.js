const {searchAllCategories, searchInCategory} = require("./search");

exports.searchRoutes = [
  {
    method: 'GET',
    path: '/search/',
    handler: function (request) {
      return searchAllCategories(request);
    },
    options: {
      auth: {
        mode: 'required'
      }
    }
  },
  {
    method: 'GET',
    path: '/search/{id}',
    handler: function (request) {
      return searchInCategory(request);
    },
    options: {
      auth: {
        mode: 'required'
      }
    }
  }
]
