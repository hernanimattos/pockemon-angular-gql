import { createAction, props } from '@ngrx/store';
import { Card } from '../../models/card.model';

interface data {
  getCards: Card[];
}

export enum CardsActionTypes {
  GET_ALL_CARDS = 'GET_ALL_CARDS',
  GET_ALL_CARDS_SUCCESS = 'GET_ALL_CARDS_SUCCESS',
  GET_CARD_BY_ID = 'GET_CARD_BY_ID',
  GET_CARD_BY_ID_SUCCESS = 'GET_CARD_BY_ID_SUCCESS',
  SEARCH_CARD = 'SEARCH_CARD',
  SEARCH_CARD_SUCCESS = 'SEARCH_CARD_SUCCESS',
}

export const getAllCards = createAction(CardsActionTypes.GET_ALL_CARDS);

export const getAllCardsSuccess = createAction(
  CardsActionTypes.GET_ALL_CARDS_SUCCESS,
  props<{ payload: any }>()
);

export const getCardById = createAction(
  CardsActionTypes.GET_CARD_BY_ID,
  props<{ _id: string }>()
);

export const getCardByIdSuccess = createAction(
  CardsActionTypes.GET_CARD_BY_ID_SUCCESS,
  props<{ payload: any }>()
);

export const searchCards = createAction(
  CardsActionTypes.SEARCH_CARD,
  props<{ term: string }>()
);

export const searchCardsSuccess = createAction(
  CardsActionTypes.SEARCH_CARD_SUCCESS,
  props<{ payload: any }>()
);
