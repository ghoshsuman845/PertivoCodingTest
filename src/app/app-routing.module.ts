import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { PagesComponent } from './pages/pages.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { PriceComponent } from './pages/price/price.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  {path: '', redirectTo: 'pages/home', pathMatch: 'full'},
  {path: 'core', component: CoreComponent,
  children: [
    
    {path: 'navbar', component: NavbarComponent},
    {path: 'footer', component: FooterComponent}, 
  ]
  },
  {path: 'pages', component: PagesComponent,
  children: [
    
    {path: 'about', component: AboutComponent},
    {path: 'home', component: HomeComponent},
    {path: 'category', component: CategoryComponent},
    {path: 'price', component: PriceComponent}, 
    {path: 'blog', component: BlogComponent},
    {path: 'contact', component: ContactComponent},  
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
