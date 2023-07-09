const {searchAllCategories} = require("./search");

exports.searchRoutes = [
  {
    method: 'GET',
    path: '/search/{nameToSearch}',
    handler: function (request, h) {
      return searchAllCategories(request);
    },
    options: {
      auth: {
        mode: 'required'
      }
    }
  }
]
