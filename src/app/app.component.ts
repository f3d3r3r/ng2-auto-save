import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fancy demo page for ng2-auto-save';
  hint = 'Enter text here!!!';
  textData = '';
  colors = [
    {name: 'black', shade: 'dark'},
    {name: 'white', shade: 'light'},
    {name: 'red', shade: 'dark'},
    {name: 'blue', shade: 'dark'},
    {name: 'yellow', shade: 'light'}
  ];
  selectedColor = "";

  setText(text: string) {
    console.log("setText called: ", text)
    this.textData = text;
  }

  setColor(color) {
    console.log("setColor called: ", color.name)
    this.selectedColor = color;
  }

}
