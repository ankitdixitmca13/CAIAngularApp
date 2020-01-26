import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { InvestmentComponent } from './investment.component';
import { InvestmentRoutingModule } from './investment-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ChartsModule,
    InvestmentRoutingModule,
  ],
  declarations: [ InvestmentComponent ]
})
export class InvestmentModule { }
