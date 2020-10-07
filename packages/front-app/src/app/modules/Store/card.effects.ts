import { Injectable } from '@angular/core';
import { Effect, Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import {
  CardsActionTypes,
  getAllCardsSuccess,
  getCardByIdSuccess,
  searchCardsSuccess,
} from './card.actions';
import { CardsGQL } from '../../shared/services/graphql/cards.gql';
import { CardByIdGQL } from '../../shared/services/graphql/cardById.gql';
import { SearchCardGQL } from '../../shared/services/graphql/sarchCards.gql';

@Injectable()
export class CardEffects {
  constructor(
    private action$: Actions,
    private cardsService: CardsGQL,
    private cardByIdService: CardByIdGQL,
    private searchService: SearchCardGQL
  ) {}

  @Effect()
  cards$ = createEffect(() =>
    this.action$.pipe(
      ofType(CardsActionTypes.GET_ALL_CARDS),
      exhaustMap(() => {
        return this.cardsService
          .watch()
          .valueChanges.pipe(
            map((data) => getAllCardsSuccess({ payload: data }))
          );
      })
    )
  );

  @Effect()
  card$ = createEffect(() =>
    this.action$.pipe(
      ofType(CardsActionTypes.GET_CARD_BY_ID),
      mergeMap(({ _id }) => {
        return this.cardByIdService
          .watch({ _id })
          .valueChanges.pipe(
            map((data) => getCardByIdSuccess({ payload: data }))
          );
      })
    )
  );

  @Effect()
  searchCard$ = createEffect(() =>
    this.action$.pipe(
      ofType(CardsActionTypes.SEARCH_CARD),
      mergeMap(({ term }) => {
        return this.searchService
          .watch({ term })
          .valueChanges.pipe(
            map((data) => searchCardsSuccess({ payload: data }))
          );
      })
    )
  );
}
