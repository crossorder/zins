import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zinsrechner02';
  showEntries: boolean = true;
  color = 'yellow';

  onButton() {
    this.showEntries = !this.showEntries;
    if (this.showEntries) {
      this.color = 'yellow';
    } else {
      this.color = 'green';
    }
  }
}
