import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingItem } from '../../Interfaces/rating-item';
@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() rating: RatingItem;
  filledStar: string[];
  emptyStar: string[];
  starList: string[];
  constructor() {
    this.rating = {
      name: '',
      content: '',
      rate: 0,
    };
    this.starList = [];
    this.filledStar = [];
    this.emptyStar = [];
  }

  ngOnInit() {
    this.filledStar = '&#9733; '.repeat(this.rating.rate).split(' ');
    this.filledStar.pop();
    this.emptyStar = '&#9734; '.repeat(5 - this.rating.rate).split(' ');
    this.emptyStar.pop();
    this.starList = this.filledStar.concat(this.emptyStar);
  }
}
