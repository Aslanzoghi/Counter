import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CounterWidgetComponent } from './counter-widget/counter-widget.component';
import { HttpClientModule } from '@angular/common/http';
import { ValueService } from './value.service';

@NgModule({
  declarations: [
    AppComponent,
    CounterDisplayComponent,
    CounterWidgetComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [ValueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
