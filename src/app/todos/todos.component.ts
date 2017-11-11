import { Component, OnInit } from '@angular/core';

import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = [];
  constructor(
  	private todoService: TodoService
  ) { }

  ngOnInit() {
  	this.todoService.getTodos()
  		.then(response => {
  			this.todos = response;
  		});
  }

}
