import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { EMPTY_CARD } from 'src/app/services/card.service';

interface position {
  x: number
  y: number
}

@Component({
  selector: 'app-card-templates',
  templateUrl: './card-templates.component.html',
  styleUrls: ['./card-templates.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardTemplatesComponent {
  @Input()
  card: Card = EMPTY_CARD;

  @Output()
  newPosition: EventEmitter<position> = new EventEmitter<position>();

  pageSize: number = 6;
  pagination = [0,1,2,3,4].map(i => this.pageSize * i);

  updatePosition(event: CdkDragEnd, indexI: number, indexJ: number) {
    let index = indexI * this.pageSize + indexJ;
    let originalPosition = this.card.messages[index].position;
    let newPosition = {
      x: originalPosition.x + event.distance.x,
      y: originalPosition.y + event.distance.y
    };

    this.card.messages[index].position = newPosition;
    this.newPosition.emit(newPosition);
  }

  getPages() {
    return Math.ceil(this.card.messages.length / this.pageSize);
  }
}