import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { BankComponent } from './bank.component';
import { BankRoutingModule } from './bank-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ChartsModule,
    BankRoutingModule,
  ],
  declarations: [ BankComponent ]
})
export class InvestmentModule { }
