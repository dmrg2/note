require("dotenv").config();

import { typeDefs } from "./graphql/schemas";
import resolvers from "./graphql/resolvers";
import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

// connect to mongodb
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`,
  function(err) {
    if (err) throw err;
  }
);
mongoose.Promise = global.Promise;

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
