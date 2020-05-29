import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { FeedComponent } from './components/feed/feed.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { LoginComponent } from './components/login/login.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { NewtripComponent } from './components/newtrip/newtrip.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:":username/profile", component:ProfileComponent, canActivate: [AuthGuard]},
  {path:":username/feed", component:FeedComponent, canActivate: [AuthGuard]},
  {path:"create", component:CreateUserComponent, canActivate: [AuthGuard]},
  {path:":username/:id/timeline", component:TimelineComponent, canActivate: [AuthGuard]},
  {path:":username/newtrip", component:NewtripComponent, canActivate: [AuthGuard]},
  {path:"upload", component: FileUploadComponent, canActivate: [AuthGuard]},
  {path:"**", redirectTo:"/login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
