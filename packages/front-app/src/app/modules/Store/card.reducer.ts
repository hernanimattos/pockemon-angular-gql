import { createReducer, on } from '@ngrx/store';
import { Card } from '../../models/card.model';
import {
  getAllCards,
  getAllCardsSuccess,
  getCardById,
  getCardByIdSuccess,
  searchCards,
  searchCardsSuccess,
} from './card.actions';

interface State {
  cards: Array<Card>;
  card: Card;
}

const INITIAL_STATE: State = {
  cards: [],
  card: {
    id: '',
    imageUrl: '',
    types: [],
    name: '',
    weaknesses: [],
    attacks: [],
  },
};

export const cardsReducer = createReducer(
  INITIAL_STATE,
  on(getAllCards, (state) => {
    return {
      ...state,
      cards: state.cards,
    };
  }),
  on(getAllCardsSuccess, (state, { payload }) => {
    return {
      ...state,
      cards: payload.data.getCards,
    };
  }),
  on(getCardById, (state) => ({
    ...state,
    card: state.card,
  })),
  on(getCardByIdSuccess, (state, { payload }) => {
    return {
      ...state,
      card: payload.data.getCardById,
    };
  }),
  on(searchCards, (state) => {
    return {
      ...state,
      cards: state.cards,
    };
  }),
  on(searchCardsSuccess, (state, { payload }) => {
    return {
      ...state,
      cards: payload.data.searchCard,
    };
  })
);
