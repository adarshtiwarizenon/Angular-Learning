import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // new Angular
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  data = {
    title: 'Angular Core Deep Dive',
  };

  onLogoClicked() {
    alert('Hello World');
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }
}
