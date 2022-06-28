import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologyComponent } from './technology/technology.component';
import { TechnologyDetailsComponent } from './technology-details/technology-details.component';
import { TechnologySummaryComponent } from './technology-summary/technology-summary.component';
import { TechnologyTrainingCostComponent } from './technology-training-cost/technology-training-cost.component';


@NgModule({
  declarations: [
    AppComponent,TechnologyComponent,TechnologyDetailsComponent, TechnologySummaryComponent, TechnologyTrainingCostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
