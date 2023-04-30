import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './components/rating/rating.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { RatingItem } from './Interfaces/rating-item';
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RatingComponent],
  templateUrl: './app.html',
})
export class App {
  name = 'Angular';
  ratings: RatingItem[] = [
    {
      name: 'Todd Aaron',
      content:
        'Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapiennec sagittis aliquam malesuada bibendum arcu vitae',
      rate: 4,
    },
    {
      name: 'Jesse Bing',
      content:
        'Mauris augue neque gravida in fermentum etsollicitudin ac orci phasellus egestas',
      rate: 1,
    },
    {
      name: 'Tori Mitchell',
      content:
        'Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate',
      rate: 2,
    },
    {
      name: 'John Nelson',
      content:
        'Urna molestie at elementum eu facilisis sed odiomorbi quis commodo odio aenean',
      rate: 4,
    },
  ];
}

bootstrapApplication(App);
