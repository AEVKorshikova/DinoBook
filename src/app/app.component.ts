import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  postTexts=[
    'Hallo! Mein Name ist Frederick.Ich bin hier, um neue Freunde zu treffen!',
    'Hallo zusammen! Freut mich euch alle kennenzulernen',
    'Hallo Freunde! ich bin Sussane und ich bin 2 Jahre alt und du ?',
    'Ich bin neu hier und ich liebe es Kekse zu essen!'
  ];
  postImages=[
    'assets/1.jpeg',
    'assets/2.jpeg',
    'assets/3.jpeg',
    'assets/6.jpeg'
    
  ];
}
