import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'cart', component: CartComponent },
    { path: 'contact', component: ContactComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
