import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home.page';
import { DoctorFilterationPage } from './pages/doctor-filteration/doctor-filteration.page';
import { FilterAndSearchPage } from './pages/filter-and-search/filter-and-search.page';
import { DoctorDetailsPage } from './pages/doctor-details/doctor-details.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }, 
  {
    path: 'doctors',
    component: FilterAndSearchPage, 
    children: [
      {
        path: '',
        component: DoctorFilterationPage,
  
      },
      {
        path: ':id',
        component: DoctorDetailsPage,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
