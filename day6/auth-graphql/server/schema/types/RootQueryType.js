//@ts-check
const graphql = require("graphql");
const { GraphQLObjectType } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({}),
});

module.exports = RootQueryType;
