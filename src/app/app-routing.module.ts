import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: IndexComponent }, // Default route
  { path: 'about', component: AboutComponent },
  { path: 'testimonial', component: TestimonialComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'product', component: ProductComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route for a 404 page
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
