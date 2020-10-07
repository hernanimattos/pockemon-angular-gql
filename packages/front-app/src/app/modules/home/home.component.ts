import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Card } from 'src/app/models';
import { getAllCards, searchCards } from '../Store/card.actions';
import { Observable } from 'rxjs';

interface CardsStore {
  cardsReducer: {
    cards: Card[];
    card: Card;
  };
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent implements OnInit {
  public cards: Card[];
  public store$: Observable<{ cardsReducer: { cards: Card[]; card: Card } }>;

  constructor(private store: Store<{ cardsStore: CardsStore }>) {}

  ngOnInit(): void {
    this.store$ = this.store.select('cardsStore');
    this.getCards();
  }

  getCards() {
    this.store.dispatch(getAllCards());
  }

  searchCard(term) {
    this.store.dispatch(searchCards({ term }));
  }
}
