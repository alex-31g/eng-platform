import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material-module';
import { RoomInfoComponent } from './room-info/room-info.component';

@NgModule({
  declarations: [RoomInfoComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [RoomInfoComponent]
})
export class RoomInfoModule { }
