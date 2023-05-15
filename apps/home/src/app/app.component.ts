import { Component } from "@angular/core";

@Component({
  selector: "technical-test-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {

  showDetail = false;
  id = "";

  toogleDetail(e: any) {
    if (e) {
      this.id = e.id;
    }
    this.showDetail = !this.showDetail;
  }



}
