import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  card1 = {
    title: 'Shiba Inu',
    subtitle: 'Es Japonés',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    alt: 'Imagen de un Shiba Inu',
  };

  card2 = {
    title: 'Gato',
    subtitle: 'Es un gato',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium impedit beatae sequi, non ut pariatur officiis fuga aspernatur repudiandae repellendus! Eligendi in, voluptatibus doloremque deleniti harum commodi quod aperiam omnis!',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/220px-Cat_November_2010-1a.jpg',
    alt: 'Imagen de un gato',
  };
}
