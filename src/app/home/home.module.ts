import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from 'src/app/home/components/home/home.component';

import { FeedModule } from 'src/app/feed/feed.module';

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
    FeedModule,
  ]
})
export class HomeModule { }
