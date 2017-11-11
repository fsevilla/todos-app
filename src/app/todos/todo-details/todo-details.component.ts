import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from './../todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  private todo = {};

  constructor(
  	private activatedRoute: ActivatedRoute,
  	private todoService: TodoService
  ) { }

  ngOnInit() {
  		this.activatedRoute.params.subscribe(params => {
  			this.getTodoDetails(params.id);
  		});
  }

  getTodoDetails(id: number) {
  	this.todoService.getTodo(id)
  		.then(response => {
  			this.todo = response;
  		})
  }

}
