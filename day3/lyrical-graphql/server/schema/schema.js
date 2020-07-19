//@ts-check
const models = require("../models");
const graphql = require("graphql");
const { GraphQLSchema, printSchema } = graphql;
const fs = require("fs");

const RootQueryType = require("./root_query_type");
const mutations = require("./mutations");

const Schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: mutations,
});

const fileData = printSchema(Schema);
fs.writeFile("./server/schema/schema.graphql", fileData, (error) => {
  if (error) {
    console.error(error);
  }
});

module.exports = Schema;
