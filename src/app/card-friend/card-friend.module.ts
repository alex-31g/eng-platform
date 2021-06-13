import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFriendComponent } from './components/card-friend/card-friend.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [CardFriendComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CardFriendModule { }
