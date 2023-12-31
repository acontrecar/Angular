import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeoresRoutingModule } from './heores-routing.module';
import HereoPageComponent from './pages/hereo-page/hereo-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    HereoPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    CardComponent,
    HeroImagePipe,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeoresRoutingModule,
    MaterialModule,
  ],
})
export class HeoresModule {}
