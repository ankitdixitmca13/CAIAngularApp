import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestmentComponent } from './investment.component';

const routes: Routes = [
  {
    path: '',
    component: InvestmentComponent,
    data: {
      title: 'Investment'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestmentRoutingModule {}
