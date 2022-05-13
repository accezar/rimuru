const withTM = require("next-transpile-modules")(["@rimuru/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
