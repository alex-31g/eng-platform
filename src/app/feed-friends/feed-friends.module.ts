import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedFriendsComponent } from 'src/app/feed-friends/components/feed-friends/feed-friends.component';

@NgModule({
  declarations: [FeedFriendsComponent],
  imports: [
    CommonModule,
  ],
  exports: [FeedFriendsComponent],
})
export class FeedFriendsModule { }
