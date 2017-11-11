import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards/auth.guard';
import { UnAuthGuard } from './shared/guards/un-auth.guard';
import { PermissionGuard } from './shared/guards/permission.guard';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
	{path: '', redirectTo: '/login', pathMatch: 'full' },
	{path: 'login', component: LoginComponent, canActivate: [UnAuthGuard] },
	{path: 'logout', component: LogoutComponent},
	{path: 'todos', component: TodosComponent, canActivate: [AuthGuard] },
	{path: 'todos/:id', component: TodoDetailsComponent, canActivate: [AuthGuard, PermissionGuard], data: {resource: 'todos', actions: ['write']} },
	{path: 'forbidden', component: ForbiddenComponent }
];

export const routing = RouterModule.forRoot(appRoutes);