import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService, EMPTY_CARD } from '../../services/card.service';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.scss']
})
export class ViewCardComponent implements OnInit {
  cardId: string = '';
  selectedCard: Card = EMPTY_CARD;

  constructor(private route: ActivatedRoute, public cardsService: CardsService) { }

  ngOnInit() {
    this.cardId = this.route.snapshot.paramMap.get('id') || '';
    this.getCard();
  }

  getCard() {
    this.cardsService.retrieveCard(this.cardId)
      .subscribe(res => {
        this.selectedCard = res.payload.data() as Card;
      });
  }
}