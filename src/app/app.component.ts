import { Component, ViewChild } from '@angular/core';
import { JsonConvererServiceService } from './services/json-converer-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('editor') editor;
  options: any = {
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
  };

  constructor(private jsonConvererServiceService: JsonConvererServiceService) {
  }

  ngOnInit() {
    // disable Automatically scrolling cursor into view after selection change warning
    this.editor.getEditor().$blockScrolling = Infinity;
  }

  json: string; //Output
  edn: any = '{:fname "Mostafa" :lname "Khodeir"}'; //Input


  convertToJson() {

    this.jsonConvererServiceService.convertToJson(this.edn).subscribe(
      jsonResult => {
        this.json = jsonResult;
      }, error => {
        alert("Failed to Parse");
      }
    );
  }

  beautify() {

    // var beautify = ace.require("ace/ext/beautify"); // get reference to extension
    // var editor = ace.edit("editor"); // get reference to editor
    // beautify.beautify(editor.session);

  }

}
