//@ts-check
const models = require("../models");
const graphql = require("graphql");
const { GraphQLSchema, printSchema } = graphql;
const RootQueryType = require("./RootQueryType");
const mutations = require("./mutations");

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: mutations,
});

module.exports = schema;
