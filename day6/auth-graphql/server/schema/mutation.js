//@ts-check
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;
const UserType = require("./types/UserType");
const auth = require("../services/auth");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, password }, req) {
        return auth.signup({ email, password, req });
      },
    },
  }),
});

module.exports = mutation;
