const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
require('dotenv').config();

// Apollo Server
// typeDefs: GraphQL Type Definitions
// resolvers: How do we resolve queries / mutations

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(
    () => {
      console.log("MongoDB Connected Successfully");
      return server.listen({ port: 5000 });
    }
  )
  .then((res) => {
    console.log(`Server is running on port ${res.url}`);
  });