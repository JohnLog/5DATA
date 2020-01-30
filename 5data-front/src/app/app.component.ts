import { Component, OnInit } from "@angular/core";
//import { TaskService } from "./task.service";
import { EtudiantService } from "./etudiants.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "front";
  todos: Array<any>;
  newTodo: any;
  requesting: boolean;

  constructor(
    private todoService: EtudiantService // private taskService: TaskService
  ) {}

  ngOnInit() {
    this.newTodo = { title: "", task: [] };
    this.requesting = false;
    this.getTodos();
  }
  getTodos() {
    this.requesting = true;
    this.todoService.getTodos().subscribe(
      res => {
        this.todos = res.todos;
        this.requesting = false;
      },
      err => {
        this.requesting = false;
      }
    );
  }
}
