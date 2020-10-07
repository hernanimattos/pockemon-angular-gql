import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../../shared/shared.module';

import { CardEffects } from '../Store/card.effects';
import { cardsReducer } from '../Store/card.reducer';

import { HomeComponent } from './home.component';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('cardsStore', { cardsReducer }),
    EffectsModule.forFeature([CardEffects]),
    RouterModule,
    SharedModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
