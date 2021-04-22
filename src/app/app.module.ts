import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "src/environments/environment";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { HttpClientModule } from '@angular/common/http';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireAuthModule, AngularFirestoreModule, HttpClientModule],
  providers: [SQLite,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, File, FileOpener],
  bootstrap: [AppComponent],
})
export class AppModule {}
