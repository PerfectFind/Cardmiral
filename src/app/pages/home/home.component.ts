import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../../models/card.model';
import { EMPTY_CARD } from '../../services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  coverImages: string[] = ['bday1', 'bday2', 'cong1', 'cong2'];

  exampleCards: Card[] = this.coverImages.map((type: string) => { return { ...EMPTY_CARD, type }});

  constructor(private router: Router  ) { }

  goToCard(val: string) {
    this.router.navigate(['new-card', val]);
  }
}
