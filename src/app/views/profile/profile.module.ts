import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ChartsModule,
    ProfileRoutingModule,
  ],
  declarations: [ ProfileComponent ]
})
export class ProfileModule { }
