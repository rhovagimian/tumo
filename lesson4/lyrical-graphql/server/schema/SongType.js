//@ts-check
const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const LyricType = require("./LyricType");
const Song = mongoose.model("song");

const SongType = new GraphQLObjectType({
  name: "SongType",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    lyrics: {
      type: new GraphQLList(LyricType),
      resolve(parentValue) {
        return Song.findLyrics(parentValue.id);
      },
    },
  }),
});

module.exports = SongType;
