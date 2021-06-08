import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    FeedRoomsModule,
    FeedFriendsModule,
  ]
})
export class HomeModule { }
