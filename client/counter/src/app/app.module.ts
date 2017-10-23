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
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { appRoutes } from './Routes';

@NgModule({
  declarations: [
    AppComponent,
    CounterDisplayComponent,
    CounterWidgetComponent,
    SaveComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    FlexLayoutModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [ValueService],
  bootstrap: [AppComponent]
})
export class AppModule { }

