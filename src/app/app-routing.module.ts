import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data:{
      seo: {
        title: 'Home | Condor Affiliates'
      }
    }
  },
  {
    path: 'home', component: HomeComponent,
    data:{
      seo: {
        title: 'Home | Condor Affiliates'
      }
    }
  },
  {
    path: 'about', component: AboutComponent,
    data:{
      seo: {
        title: 'About | Condor Affiliates'
      }
    }
  },
  {
    path: 'brands', component: BrandsComponent,
    data:{
      seo: {
        title: 'Brands | Condor Affiliates'
      }
    }
  },
  {
    path: 'contact', component: ContactComponent,
    data:{
      seo: {
        title: 'Contact | Condor Affiliates'
      }
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
