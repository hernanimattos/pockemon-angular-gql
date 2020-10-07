import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Card } from 'src/app/models';
import { getCardById } from '../Store/card.actions';
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';

interface CardsStore {
  cardsReducer: {
    cards: Card[];
    card: Card;
  };
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public card: Card;
  public store$: Observable<{ cardsReducer: { cards: Card[]; card: Card } }>;
  constructor(
    private route: ActivatedRoute,
    private store: Store<{ cardsStore: CardsStore }>
  ) {}

  ngOnInit(): void {
    this.store$ = this.store.select('cardsStore');
    const id = this.route.snapshot.paramMap.get('id');
    this.getCardByID(id);
  }

  getCardByID(_id: string) {
    this.store.dispatch(getCardById({ _id }));
  }
}
