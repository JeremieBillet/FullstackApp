import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserBoardComponent } from './user/user-board/user-board.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserTypeBoardComponent } from './userType/user-type-board/user-type-board.component';
import { UserTypeFormComponent } from './userType/user-type-form/user-type-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/user', pathMatch: 'full'},
  { path: 'user', component: UserBoardComponent },
  { path: 'user/edit/:id', component: UserFormComponent },
  { path: 'user_type', component: UserTypeBoardComponent },
  { path: 'user_type/edit/:id', component: UserTypeFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
