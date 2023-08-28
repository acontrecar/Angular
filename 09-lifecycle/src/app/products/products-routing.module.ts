import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'product',
        component: ProductsComponent,
      },
      {
        path: '**',
        redirectTo: 'product',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
