import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PowerPipe } from './power.pipe';
import { SortPipe } from './sort.pipe';
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PlantComponent } from './plant/plant.component';
import { SeedComponent } from './seed/seed.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanterComponent } from './planter/planter.component';
import { RegistrationComponent } from './registration/registration.component';
import { CustomerComponent } from './customer/customer.component';
import { ViewplantComponent } from './viewplant/viewplant.component';
import { ViewseedComponent } from './viewseed/viewseed.component';
import { ViewplanterComponent } from './viewplanter/viewplanter.component';
import { VieworderComponent } from './vieworder/vieworder.component';
import { OrderComponent } from './order/order.component';
import { CustomerblockComponent } from './customerblock/customerblock.component';
import { OrderblockComponent } from './orderblock/orderblock.component';


@NgModule({
  declarations: [
    AppComponent,
    PowerPipe,
    SortPipe,
    FirstComponent,
    LoginComponent,
    SigninComponent,
    SignupComponent,
    PlantComponent,
    SeedComponent,
    AdminComponent,
    UserComponent,
    PlanterComponent,
    RegistrationComponent,
    CustomerComponent,
    ViewplantComponent,
    ViewseedComponent,
    ViewplanterComponent,
    VieworderComponent,
    OrderComponent,
    CustomerblockComponent,
    OrderblockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
