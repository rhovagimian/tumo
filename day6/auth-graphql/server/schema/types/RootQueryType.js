//@ts-check
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    dummyField: { type: GraphQLString },
  }),
});

module.exports = RootQueryType;
