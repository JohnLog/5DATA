import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Http, Response } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EtudiantService } from "./etudiants.service";
import { OutputGraphComponent } from "./output-graph/output-graph.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, OutputGraphComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [/*TaskService*/ EtudiantService],
  bootstrap: [AppComponent]
})
export class AppModule {}
