import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',//optional
  imports: [RouterOutlet],//optional
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'basic ...';
}
