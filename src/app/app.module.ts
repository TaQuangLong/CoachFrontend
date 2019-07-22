import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoachesComponent } from './coaches/coaches.component';
import { NavComponent } from './nav/nav.component';
import { CoachAddComponent } from './coach-add/coach-add.component';
import { CoachUpdateComponent } from './coach-update/coach-update.component';
import { CoachDetailComponent } from './coach-detail/coach-detail.component';
import{HttpClientModule} from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      CoachesComponent,
      NavComponent,
      CoachAddComponent,
      CoachUpdateComponent,
      CoachDetailComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
