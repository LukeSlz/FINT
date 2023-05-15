import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './content/list/list.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { DescriptionComponent } from './content/description/description.component';
import { ContentComponent } from './content/content/content.component';
import { CommunityComponent } from './community/community.component';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'modules', component: ListComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'modules/description/:id', component: DescriptionComponent, canActivate: [AuthGuard]},
  {path: 'modules/content', component: ContentComponent, canActivate: [AuthGuard]},
  {path: 'community', component: CommunityComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }