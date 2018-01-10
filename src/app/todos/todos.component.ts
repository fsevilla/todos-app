import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {Router} from '@angular/router';


import { TodoService } from './todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
  trigger('fade', [
    state('true', style({
      opacity: '0',
      transform: 'opacity'
    })),
    state('false',   style({
      opacity: '1',
      transform: 'opacity'
    })),
    transition('true => false', animate('2000ms ease-in')),
    transition('false => true', animate('2000ms ease-out'))
  ])
]
})
export class TodosComponent implements OnInit {
  statusClass = 'false';
  todos = [];
  constructor(
  	private todoService: TodoService,
    private toastr: ToastrService,
    private router: Router
  ) { 
    todoService.childLoaded.subscribe(load => {
      this.statusClass = load ? 'true' : 'false';
    });
  }

  ngOnInit() {
  	this.todoService.getTodos()
  		.then(response => {
        this.toastr.success('Las tareas se han listado correctamente', 'Success');
  			this.todos = response;
  		});
  }

  onNavigate(todoID) {
      this.statusClass = 'true';
    setTimeout(() => {this.router.navigate([`/todos/${todoID}`]);}, 2000);
  }

}
