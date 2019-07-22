import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoachesComponent } from './coaches/coaches.component';
import { CoachDetailComponent } from './coach-detail/coach-detail.component';
import { CoachAddComponent } from './coach-add/coach-add.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'coach-add',component:CoachAddComponent},
  {path:'detail/:id',component:CoachDetailComponent},
  {path:'coaches',component:CoachesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
