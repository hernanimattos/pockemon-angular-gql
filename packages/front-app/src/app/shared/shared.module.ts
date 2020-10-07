import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../components/header/header.component';
import { CCardComponent } from '../components/c-card/c-card.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';

@NgModule({
  declarations: [HeaderComponent, CCardComponent, SearchBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, CCardComponent, SearchBarComponent],
})
export class SharedModule {}
