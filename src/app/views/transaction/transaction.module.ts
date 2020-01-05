import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { TransactionComponent } from './transaction.component';
import { TransactionRoutingModule } from './transaction-routing.module';

@NgModule({
  imports: [
    FormsModule,
    TransactionRoutingModule,
  ],
  declarations: [ TransactionComponent ]
})
export class TransactionModule { }
