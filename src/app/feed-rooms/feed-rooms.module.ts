import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material-module';

import { UserModule } from '../shared/modules/user/user.module';
import { RoomInfoModule } from '../shared/modules/room-info/room-info.module';

import { FeedRoomsComponent } from 'src/app/feed-rooms/components/feed-rooms/feed-rooms.component';

@NgModule({
  declarations: [FeedRoomsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    UserModule,
    RoomInfoModule
  ],
  exports: [FeedRoomsComponent],
})
export class FeedRoomsModule { }
