import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

import { ImgUserComponent } from './components/img-user/img-user.component';

@NgModule({
  declarations: [ImgUserComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ImgUserModule { }
