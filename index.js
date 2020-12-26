'use strict'

require('dotenv').config();

const { graphql, buildSchema } = require('graphql');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();
const port = process.env.PORT || 3000

console.log(
  port === process.env.PORT
  ? 'Server running on env var port'
  : 'Server running on default port'
);

// Defining Schema
const schema = buildSchema(`
  type Query {
    "Returns a Hello World"
    hello: String
    "Returns una reputeada"
    greetings: String
  }
`);

// Configure Resolvers
const resolvers = {
  hello: () => {
    return 'Returns a Hello World'
  },

  greetings: () => {
    return 'Returns una reputeada'
  }
};

app.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
});