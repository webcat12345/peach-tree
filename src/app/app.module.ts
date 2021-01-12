import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from './layout/layout.module';
import { TransactionManagerModule } from './transaction-manager/transaction-manager.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    TransactionManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
