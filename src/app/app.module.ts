import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './todos/todo.service';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { AuthService } from './shared/services/auth.service';
import { UnAuthGuard } from './shared/guards/un-auth.guard';
import { PermissionsService } from './shared/services/permissions.service';
import { HttpClient } from './shared/services/http-client.service';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { PermissionsGuard } from './shared/guards/permissions.guard';
import { TodoStatusDirective } from './todos/directives/todo-status.directive';
import { PermissionsDirective } from './shared/directives/permissions.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoDetailsComponent,
    LoginComponent,
    ForbiddenComponent,
    LogoutComponent,
    HeaderComponent,
    TodoStatusDirective,
    PermissionsDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [
    TodoService,
    LoginService,
    AuthService,
    UnAuthGuard,
    PermissionsService,
    HttpClient,
    AuthGuard,
    PermissionsGuard
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
