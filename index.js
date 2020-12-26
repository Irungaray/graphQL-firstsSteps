'use strict'

const { graphql, buildSchema } = require('graphql');

// Defining Schema
const schema = buildSchema(`
  type Query {
    hello: String
    greetings: String
  }
`)

// Configure Resolvers
const resolvers = {
  hello: () => {
    return 'Hello World'
  },

  greetings: () => {
    return 'Hola putos'
  }
}

// Execute Hello query
graphql(schema, '{ hello, greetings }', resolvers).then((data) => {
  console.log(data)
})