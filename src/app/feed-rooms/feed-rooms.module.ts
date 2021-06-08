import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoomsComponent } from 'src/app/feed-rooms/components/feed-rooms/feed-rooms.component';

@NgModule({
  declarations: [FeedRoomsComponent],
  imports: [
    CommonModule,
  ],
  exports: [FeedRoomsComponent],
})
export class FeedRoomsModule { }
