import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { CardRoomComponent } from 'src/app/card-room/components/card-room.component';

@NgModule({
  declarations: [CardRoomComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [CardRoomComponent]
})
export class CardRoomModule { }
