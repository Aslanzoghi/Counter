import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CounterWidgetComponent } from './counter-widget/counter-widget.component';
import { HttpClientModule } from '@angular/common/http';
import { ValueService } from './value.service';
import { FormsModule } from '@angular/forms';
import { SaveComponent } from './save/save.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterDisplayComponent,
    CounterWidgetComponent,
    SaveComponent
  ],
  imports: [
    FormsModule,
    FlexLayoutModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [ValueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
