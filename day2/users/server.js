//@ts-check
const expresss = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

const app = expresss();

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

app.listen(4000, () => {
  console.log("Listening");
});
