import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdiazComponent } from './adiaz/adiaz.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdiazComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ALAN-DIAZ-ANGULAR';
}
