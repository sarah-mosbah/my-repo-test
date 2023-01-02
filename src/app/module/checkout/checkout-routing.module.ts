import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutSuccessPage } from './pages/checkout-success/checkout-success.component';

const routes: Routes = [
  {
    path: 'checkout',
    component: CheckoutSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
