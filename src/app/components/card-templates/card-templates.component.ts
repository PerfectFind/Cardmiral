import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { EMPTY_CARD } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-templates',
  templateUrl: './card-templates.component.html',
  styleUrls: ['./card-templates.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardTemplatesComponent {
  @Input()
  card: Card = EMPTY_CARD;

  pageSize: number = 6;
  pagination = [0,1,2,3,4].map(i => this.pageSize * i);

  updatePosition(event: CdkDragEnd, indexI: number, indexJ: number) {
    let index = indexI * this.pageSize + indexJ;
    let originalPosition = this.card.messages[index].position;

    this.card.messages[index].position = {
      x: originalPosition.x + event.distance.x,
      y: originalPosition.y + event.distance.y
    }
  }

  getPages() {
    return Math.ceil(this.card.messages.length / this.pageSize);
  }
}