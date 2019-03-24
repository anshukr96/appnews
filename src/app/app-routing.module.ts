import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewscardComponent } from './newscard/newscard.component';

const routes: Routes = [
  { path: '', redirectTo: 'details/Home', pathMatch: 'full' },
  { path: 'details/:category', component: NewscardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
