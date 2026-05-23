import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from '../career/career.component';
import { HomeComponent } from 'src/home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'career', component: CareerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
