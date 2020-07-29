//@ts-check
const graphql = require("graphql");
const { GraphQLSchema } = graphql;

const RootQueryType = require("./types/RootQueryType");

module.exports = new GraphQLSchema({
  query: RootQueryType,
});
