import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

import { UserProfileModule } from 'src/app/user-profile/user-profile.module';
import { CardRoomModule } from 'src/app/card-room/card-room.module';

import { FeedRoomsComponent } from 'src/app/feed-rooms/components/feed-rooms/feed-rooms.component';

@NgModule({
  declarations: [FeedRoomsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    UserProfileModule,
    CardRoomModule
  ],
  exports: [FeedRoomsComponent],
})
export class FeedRoomsModule { }
