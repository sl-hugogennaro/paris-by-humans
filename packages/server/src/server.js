const { ApolloServer, gql } = require('apollo-server')
const { strGenerator, objGenerator } = require('./helpers')
const typeDefs = gql(`
${strGenerator(``, `${__dirname}/types`)}
${strGenerator(`type Query {`, `${__dirname}/queries`)}}
`)
const resolvers = { Query: objGenerator({}, `${__dirname}/resolvers`) }

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
