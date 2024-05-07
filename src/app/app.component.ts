import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimalPageComponent } from "./animal-page/animal-page.component";
import { AnimalItemComponent } from './animal-item/animal-item.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AnimalPageComponent, AnimalItemComponent]
})
export class AppComponent {
  title = 'my-app';
}
