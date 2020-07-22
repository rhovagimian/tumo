//@ts-check
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const bodyParser = require("body-parser");
const db = require("./db");
const schema = require("./schema/schema");
const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config.js");

db.connect();
const app = express();
app.use(bodyParser.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// @ts-ignore
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
