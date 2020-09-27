import { Component, OnInit } from '@angular/core';
import {TodosService} from '../../service/todos.service';
import {Todo} from '../../model/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos: Todo[] = [];

  constructor(
    private todoService: TodosService
  ) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }
}
