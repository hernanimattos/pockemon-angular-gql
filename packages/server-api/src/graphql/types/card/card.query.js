import {
  CardsResolver,
  getCardByIdResolver,
  searchCardResolver
} from './card.resolver';

// eslint-disable-next-line no-unused-vars
const getCards = () => CardsResolver();
// eslint-disable-next-line no-unused-vars
const getCardById = (obj, args, context, info) => getCardByIdResolver(args);
// eslint-disable-next-line no-unused-vars
const searchCard = (obj, args, context, info) => searchCardResolver(args);

export { getCards, getCardById, searchCard };
