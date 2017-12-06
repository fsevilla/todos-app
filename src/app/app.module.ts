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
import { AuthGuard } from './shared/guards/auth.guard';
import { UnAuthGuard } from './shared/guards/un-auth.guard';
import { PermissionsService } from './shared/services/permissions.service';
import { HttpClient } from './shared/services/http-client.service';
import { PermissionGuard } from './shared/guards/permission.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { TodoStatusDirective } from './shared/directives/todo-status.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoDetailsComponent,
    LoginComponent,
    ForbiddenComponent,
    LogoutComponent,
    HeaderComponent,
    TodoStatusDirective
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
    AuthGuard,
    UnAuthGuard,
    PermissionsService,
    HttpClient,
    PermissionGuard
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
