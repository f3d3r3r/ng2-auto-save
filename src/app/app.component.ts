import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fancy demo page for ng2-auto-save';
  hint = 'Enter text here!!!';
  textData = '';

  setText(text: string) {
    console.log("settext called: ", text)
    this.textData = text;
  }

}
