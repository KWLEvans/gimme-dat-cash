import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { masterFirebaseConfig } from './api-keys';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ProjectTileComponent } from './project-tile/project-tile.component';
import { HomeComponent } from './home/home.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { GoalPipe } from './goal.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    ProjectTileComponent,
    HomeComponent,
    ProjectDetailComponent,
    GoalPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
