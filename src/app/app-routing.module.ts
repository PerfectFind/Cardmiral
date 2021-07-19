import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddWishesComponent } from './pages/add-wishes/add-wishes.component';
import { CreateCardComponent } from './pages/create-card/create-card.component';
import { ViewCardComponent } from './pages/view-card/view-card.component';

const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent },
 { path: 'add-wishes/:id', component: AddWishesComponent },
 { path: 'new-card/:type', component: CreateCardComponent },
 { path: 'view-card/:id', component: ViewCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
