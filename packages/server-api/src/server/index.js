// eslint-disable-next-line no-undef
// require('dotenv').config()
import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from '../graphql';

const rootSchema = `
      schema {
        query: Query
      }
    `;

const server = new ApolloServer({
  typeDefs: [rootSchema, ...typeDefs],
  resolvers,
  context: ({ req }) => {
    const {
      // eslint-disable-next-line comma-dangle
      headers: { authorization }
    } = req;

    return authorization;
    // eslint-disable-next-line comma-dangle
  },
  debug: true
});

server.listen().then(({ url }) => {
  console.warn(`Server ready at aqui as ${url}`);
});
