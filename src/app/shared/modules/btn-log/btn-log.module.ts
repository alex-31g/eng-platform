import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

import { BtnLogComponent } from './components/btn-log/btn-log.component';

@NgModule({
  declarations: [BtnLogComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class BtnLogModule { }
