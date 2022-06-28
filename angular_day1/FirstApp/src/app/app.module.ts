import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HelloComponent } from './hello/hello.component';
import { ByeComponent } from './bye/bye.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HelloComponent,
    ByeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
