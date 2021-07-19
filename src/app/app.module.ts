import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { FlexLayoutModule } from '@angular/flex-layout';

// Material UI
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar'

// Custom Pages
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddWishesComponent } from './pages/add-wishes/add-wishes.component';
import { CreateCardComponent } from './pages/create-card/create-card.component';
import { ViewCardComponent } from './pages/view-card/view-card.component';

// Custom Component
import { CardTemplatesComponent } from './components/card-templates/card-templates.component';
import { LinkModalComponent } from './components/link-modal/link-modal.component';
import { GifSearchComponent } from './components/gif-search/gif-search.component';

// Firebase and Firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

// Services
import { CardsService } from './services/card.service';
import { EmailService } from './services/email.service';
import { GifService } from './services/gif.service';

const config = {
  apiKey: "AIzaSyAqXskhRHylMf86lFJ33omYh8-wcm3TB5c",
  authDomain: "cardmiral.firebaseapp.com",
  projectId: "cardmiral",
  storageBucket: "cardmiral.appspot.com",
  messagingSenderId: "297380688108",
  appId: "1:297380688108:web:2f9364e2e6afbac3a975c9"
};

const DECLARATIONS = [
  CardTemplatesComponent,
  LinkModalComponent,
  GifSearchComponent,

  AppComponent,
  HomeComponent,
  AddWishesComponent,
  CreateCardComponent,
  ViewCardComponent,
];

const IMPORTS = [
  AppRoutingModule,
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  DragDropModule,
  NgbModule,
  FlexLayoutModule,
  HttpClientModule,

  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatPaginatorModule,
  MatToolbarModule,

  AngularFireModule.initializeApp(config),
  AngularFirestoreModule,
  AngularFireStorageModule,
]

const SERVICES = [
  CardsService,
  EmailService,
  GifService,
]

@NgModule({
  declarations: DECLARATIONS,
  imports: IMPORTS,
  providers: SERVICES,
  bootstrap: [AppComponent]
})
export class AppModule { }
