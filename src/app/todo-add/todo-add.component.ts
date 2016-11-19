import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";

@Component({
    selector: 'app-todo-add',
    templateUrl: './todo-add.component.html',
    styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

    data: String;

    constructor(private _store: Store<any>) {
    }

    ngOnInit() {
    }

    addTodo() {
        this._store.dispatch({type: "add", payload:this.data});
    }

}
