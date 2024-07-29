import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { ProfilComponent } from './components/profil/profil.component';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'list', canActivate : [adminGuard], component : ListComponent},
  {path : 'profil', component : ProfilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
