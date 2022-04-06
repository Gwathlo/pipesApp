import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import localeCa from '@angular/common/locales/ca-ES-VALENCIA';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeCa);
registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, AppRouterModule, SalesModule],
  providers: [{ provide: LOCALE_ID, useValue: 'ca-ES-VALENCIA' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
