//@ts-check
const graphql = require("graphql");
const UserType = require("./UserType");
const { GraphQLObjectType, GraphQLString } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      },
    },
  }),
});

module.exports = RootQueryType;
