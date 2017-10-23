import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CounterWidgetComponent } from './counter-widget/counter-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterDisplayComponent,
    CounterWidgetComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
