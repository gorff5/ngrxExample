import { Component, OnInit } from '@angular/core';
import {Todo} from "../shared/model/todo.model";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos:Observable<Array<any>>;
  constructor(private _store: Store<any>) {
    this.todos = _store.select('todos') as any;
  }

  ngOnInit() {
  }

}
