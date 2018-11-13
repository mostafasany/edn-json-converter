import { Component, OnInit } from '@angular/core';
import { JsonConvererServiceService } from './services/json-converer-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private jsonConvererServiceService: JsonConvererServiceService) {

  }

  json: string; //Output
  edn: string; //Input


  convertToJson() {

    this.jsonConvererServiceService.convertToJson(this.edn).subscribe(
      jsonResult => {
        this.json = jsonResult;
      }
    );
  }
}
