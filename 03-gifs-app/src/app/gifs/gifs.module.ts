import { HomePageComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box-component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
