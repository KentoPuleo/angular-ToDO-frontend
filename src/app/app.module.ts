import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ListdoneComponent } from './components/page/listdone/listdone.component';
import { ListComponent } from './components/page/list/list.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './components/auth/login/login.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { HomeComponent } from './components/page/home/home.component';
import { TestComponent } from './components/test/test.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ListdoneComponent,
    ListComponent,
    LoginComponent,
    SigninComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'listdone', component: ListdoneComponent},
      { path: 'list', component: ListComponent},
      { path: 'login', component: LoginComponent},
      { path: 'signin', component: SigninComponent},
      { path: 'home', component: HomeComponent},
      { path: 'test', component: TestComponent},
    ]),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
