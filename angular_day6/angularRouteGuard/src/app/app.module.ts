import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { StudentService } from './student.service';
import { ActivateGuard } from './activate.guard';
import { HomeComponent } from './home/home.component';
import { VendorComponent } from './vendor/vendor.component';
import { DeactivateGuard } from './deactivate.guard';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    VendorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StudentService,ActivateGuard,DeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
