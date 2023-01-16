import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ListdoneComponent } from './components/listdone/listdone.component';
import { ListComponent } from './components/list/list.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';


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
      { path: 'test', component: TestComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
