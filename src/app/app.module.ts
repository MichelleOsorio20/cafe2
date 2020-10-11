import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './componentes/home/home.component';
import { ROUTES } from './app-routes';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { ForgotPasswordComponent } from './componentes/auth/forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './componentes/admin/admin.component';
import { ModalComponent } from './componentes/modal/modal.component';
/* firebase */
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { IndexComponent } from './componentes/index/index.component';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegistrarComponent,
    ForgotPasswordComponent,
    IndexComponent,
    AdminComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    RouterModule.forRoot(ROUTES, { useHash: true}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: StorageBucket, useValue: 'gs://caffeetalk-cb81f.appspot.com'}, AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
