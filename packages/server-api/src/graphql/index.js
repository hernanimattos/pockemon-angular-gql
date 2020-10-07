import Card from './types/card/card.gql';
import schema from './schema.gql';

import { getCards, getCardById, searchCard } from './types/card/card.query';

const typeDefs = [Card, schema];

const resolvers = {
  Query: {
    getCards,
    getCardById,
    searchCard
  }
};

export { typeDefs, resolvers };
