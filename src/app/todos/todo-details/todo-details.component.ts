import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from './../todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit, OnDestroy {

  private todo = {};
  statusClass = true;

  constructor(
  	private activatedRoute: ActivatedRoute,
  	private todoService: TodoService
  ) { }

  ngOnInit() {
  		this.activatedRoute.params.subscribe(params => {
  			this.getTodoDetails(params.id);
  		});
  }

  ngOnDestroy() {
    this.todoService.childLoaded.next(false);
  }

  getTodoDetails(id: number) {
  	this.todoService.getTodo(id)
  		.then(response => {
        this.todoService.childLoaded.next(true);
  			this.todo = response;
        this.statusClass = false;
  		})
  }

}
