import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentComponent } from './investment.component';
import { InvestmentRoutingModule } from './investment-routing.module';

@NgModule({
  imports: [
    FormsModule,
    InvestmentRoutingModule,
  ],
  declarations: [ InvestmentComponent ]
})
export class InvestmentModule { }
