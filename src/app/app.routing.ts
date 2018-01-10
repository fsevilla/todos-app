import { RouterModule, Routes } from '@angular/router';

import { UnAuthGuard } from './shared/guards/un-auth.guard';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { PermissionsGuard } from './shared/guards/permissions.guard';

const appRoutes: Routes = [
	{path: '', redirectTo: '/login', pathMatch: 'full' },
	{path: 'login', component: LoginComponent, canActivate: [UnAuthGuard] },
	{path: 'logout', component: LogoutComponent},
	{
		path: 'todos', 
		component: TodosComponent, 
		canActivate: [AuthGuard, PermissionsGuard],
		data: {
			resource: 'todos',
			permissions: ['read', 'write']
		},
		children: [
			{
			path: ':id', 
			component: TodoDetailsComponent,
			canActivate: [AuthGuard, PermissionsGuard],
			data: {
					resource: 'todos',
					permissions: ['read', 'write']
				}
	 		},
		]
	},
	{path: 'forbidden', component: ForbiddenComponent, canActivate: [AuthGuard] }
];

export const routing = RouterModule.forRoot(appRoutes);