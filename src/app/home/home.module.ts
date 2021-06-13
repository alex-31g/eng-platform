import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

import { HomeComponent } from 'src/app/home/components/home/home.component';

import { FeedRoomsModule } from 'src/app/feed-rooms/feed-rooms.module';
import { FeedFriendsModule } from 'src/app/feed-friends/feed-friends.module';

const routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FeedRoomsModule,
    FeedFriendsModule,
  ]
})
export class HomeModule { }
