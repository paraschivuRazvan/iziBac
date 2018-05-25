import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatProgressSpinnerModule, MatDialogModule } from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './authInterceptor';

import { APP_CONFIG, AppConfig } from './app-config'

import { AppComponent } from './app.component';

import { MainComponent } from './components/main/main.component';
import { ProgressSpinnerComponent } from './components/Shared/progress-spinner/progress-spinner.component';
import { DialogComponent } from './components/Shared/dialog/dialog.component';
import { DialogOverviewExampleDialog } from './components/Shared/dialog/dialog.component';

import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { environment } from '../environments/environment';
import { environment } from './../environments/environment';
import { PrivacyComponent } from './components/privacy/privacy.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProgressSpinnerComponent,
    DialogComponent,
    DialogOverviewExampleDialog,
    PrivacyComponent,

  ],
  entryComponents: [DialogOverviewExampleDialog],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features

  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
