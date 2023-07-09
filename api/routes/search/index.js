const {searchAllCategories} = require("./search");

exports.searchRoutes = [
  {
    method: 'POST',
    path: '/search/',
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
