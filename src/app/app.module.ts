import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserState } from './state/user.action';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from 'src/environments/environment';
import { environment } from '../environments/environment';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      UserState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }