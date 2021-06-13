import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

import { BtnCallComponent } from './components/btn-call/btn-call.component';

@NgModule({
  declarations: [BtnCallComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class BtnCallModule { }
