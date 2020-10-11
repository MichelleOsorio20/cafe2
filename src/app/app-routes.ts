import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { ForgotPasswordComponent } from './componentes/auth/forgot-password/forgot-password.component';
import { IndexComponent } from './componentes/index/index.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { ModalComponent } from './componentes/modal/modal.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', component:HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: '', component:LoginComponent},
    {path: 'registrar', component: RegistrarComponent},
    {path: '', component:RegistrarComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: '', component:ForgotPasswordComponent},
    {path: 'index', component: IndexComponent},
    {path: '', component: IndexComponent},
    {path: 'admin', component: AdminComponent},
    {path: '', component: AdminComponent},
    {path: 'modal', component: ModalComponent},
    {path: '', component: ModalComponent}
];