import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';
import { tokenInterceptor } from './services/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfilComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // HttpClientModule
  ],
  providers: [
    provideHttpClient(withInterceptors([tokenInterceptor]))
    //{provide : HTTP_INTERCEPTORS, useClass : tokenInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
