import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectsGuard } from './project-detail/projects.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot([
    { path: 'Home', component: HomeComponent },
    { path: 'Home/:id',
        component: ProjectDetailComponent,
        canActivate: [ProjectsGuard] },
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
], {
    initialNavigation: 'enabled'
}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
