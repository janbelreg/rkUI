import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ZaznamyComponent } from './pages/Zaznamy/zaznamy/zaznamy.component';
import { SpisyZaznamComponent } from './pages/Spisy/spisy-zaznam/spisy-zaznam/spisy-zaznam.component';
import { LoginComponent } from './pages/login/login.component';
import { SpisyComponent } from './pages/Spisy/spisy/spisy.component';
import { AppComponent } from './app.component';
import { UserspisyComponent } from './pages/userspisy/userspisy.component';
//stanovenie ciest smerovania jednotlivých komponentov
const routes: Routes = [
  {path: 'home', component: HomeComponent, },
  {path: 'zaznamy', component: ZaznamyComponent, },
  {path: 'spisy', component: SpisyComponent, },
  {path: 'spisy-zaznam', component: SpisyZaznamComponent, },
  {path: 'userspisy', component: UserspisyComponent, },
  {path: 'login', component: LoginComponent, },
  
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

