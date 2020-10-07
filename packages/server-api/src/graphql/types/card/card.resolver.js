import { Provider } from '../../../http';
const CardsResolver = async () => {
  const { data } = await Provider.get('cards');
  const { cards } = data;

  const cardsFiltered = cards.map((e) => ({
    id: e.id,
    name: e.name,
    imageUrl: e.imageUrl,
    types: e.types,
    hp: e.hp
  }));

  return cardsFiltered;
};

const getCardByIdResolver = async (args) => {
  const { _id } = args;
  const { data } = await Provider.get(`cards/${_id}`);
  const { card } = data;
  const { id, name, imageUrl, types, hp, attacks, weaknesses } = card;

  return {
    id,
    name,
    imageUrl,
    types,
    hp,
    attacks,
    weaknesses
  };
};

const searchCardResolver = async (args) => {
  const { term } = args;
  const { data } = await Provider.get(`cards?name=${term}`);
  const { cards } = data;

  const cardsFiltered = cards.map((e) => ({
    id: e.id,
    name: e.name,
    imageUrl: e.imageUrl,
    types: e.types,
    hp: e.hp
  }));

  return cardsFiltered;
};

export { CardsResolver, getCardByIdResolver, searchCardResolver };
