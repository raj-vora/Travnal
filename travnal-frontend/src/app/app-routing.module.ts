import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component'
import { FeedComponent } from './components/feed/feed.component'
import { CreateUserComponent } from './components/create-user/create-user.component'
import { LogoutComponent } from './components/logout/logout.component'
import { LoginComponent } from './components/login/login.component'
import { TimelineComponent } from './components/timeline/timeline.component'
import { NewtripComponent } from './components/newtrip/newtrip.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"profile", component:ProfileComponent},
  {path:"feed", component:FeedComponent},
  {path:"create", component:CreateUserComponent},
  {path:"timeline", component:TimelineComponent},
  {path:"newtrip", component:NewtripComponent},
  {path:"logout", component:LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
