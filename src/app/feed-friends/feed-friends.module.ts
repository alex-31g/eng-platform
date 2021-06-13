import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

import { FeedFriendsComponent } from 'src/app/feed-friends/components/feed-friends/feed-friends.component';

@NgModule({
  declarations: [FeedFriendsComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [FeedFriendsComponent],
})
export class FeedFriendsModule { }
