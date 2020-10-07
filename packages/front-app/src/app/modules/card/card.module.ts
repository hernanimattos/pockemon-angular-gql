import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CardEffects } from '../Store/card.effects';
import { SharedModule } from '../../shared/shared.module';
import { cardsReducer } from '../Store/card.reducer';

import { CardComponent } from './card.component';
@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('cardsStore', { cardsReducer }),
    EffectsModule.forFeature([CardEffects]),
    RouterModule,
    SharedModule,
  ],
  exports: [CardComponent],
})
export class CardModule {}
