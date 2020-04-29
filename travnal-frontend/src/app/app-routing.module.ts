import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component'
import { FeedComponent } from './components/feed/feed.component'

const routes: Routes = [
  {path:"profile", component:ProfileComponent},
  {path:"feed", component:FeedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
