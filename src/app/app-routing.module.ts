import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerblockComponent } from './customerblock/customerblock.component';
import { FirstComponent } from './first/first.component';
import { OrderComponent } from './order/order.component';
import { OrderblockComponent } from './orderblock/orderblock.component';
import { PlantComponent } from './plant/plant.component';
import { PlanterComponent } from './planter/planter.component';
import { RegistrationComponent } from './registration/registration.component';
import { SeedComponent } from './seed/seed.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { ViewplantComponent } from './viewplant/viewplant.component';
import { ViewplanterComponent } from './viewplanter/viewplanter.component';
import { ViewseedComponent } from './viewseed/viewseed.component';

const routes: Routes = [
  {
    path:'customerblock',
    component:CustomerblockComponent
  },
  {
    path:'orderblock',
    component:OrderblockComponent

  },
  {
    path:'',
    component:SigninComponent
  },
  {
    path:'order',
    component:OrderComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'viewseed',
    component:ViewseedComponent
  },
  {
    path:'viewplanter',
    component:ViewplanterComponent
  },
{
path:'viewplant',
component:ViewplantComponent
},
  {
      path:'customer',
      component:CustomerComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'planter',
    component:PlanterComponent
  },
  {
    path:'Home',
    component:AppComponent
  },
  {
    path:'seed',
    component:SeedComponent
  },
  {
    path:'myuser',
    component:UserComponent

  },
  {
    path:'plant',
    component:PlantComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  
{
  path:'first/:p1',
  component:FirstComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
