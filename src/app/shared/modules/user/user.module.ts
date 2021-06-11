import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material-module';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [UserComponent]
})
export class UserModule { }
