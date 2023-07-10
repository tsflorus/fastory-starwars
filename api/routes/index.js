const {authRoutes} = require("./auth");
const {searchRoutes} = require("./search");

exports.apiRoutes = authRoutes.concat(searchRoutes)
