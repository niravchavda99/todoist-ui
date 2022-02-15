import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ClosedTodosComponent } from './closed-todos/closed-todos.component';
import { OpenTodosComponent } from './open-todos/open-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    ClosedTodosComponent,
    OpenTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
