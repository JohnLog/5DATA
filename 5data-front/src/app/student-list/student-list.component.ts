import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.scss"]
})
export class StudentListComponent implements OnInit {
  private students: any;

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http
      .get("http://localhost:3000/etudiants/get/")
      .subscribe(students => {
        this.students = students;
      });
  }

  allStudent(event: Event) {
    console.log('sltA');
    this._http
      .get("http://localhost:3000/etudiants/get/")
      .subscribe(students => {
        this.students = students;
      });
  }
  successfulStudent(event: Event) {
    console.log('sltZ');
    this._http
      .get("http://localhost:3000/etudiants/success/")
      .subscribe(students => {
        this.students = students;
      });
  }
}
