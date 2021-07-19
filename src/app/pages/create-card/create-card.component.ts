import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../../models/card.model';
import { CardsService, EMPTY_CARD } from '../../services/card.service';
import { EmailService } from '../../services/email.service';
import { MatDialog } from '@angular/material/dialog';
import { LinkModalComponent } from '../../components/link-modal/link-modal.component';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {
  card: Card = EMPTY_CARD;
  
  constructor(
    public cardsService: CardsService,
    private emailService: EmailService,
    private route: ActivatedRoute,
    public dialog: MatDialog ) { }
    
  ngOnInit() {
    this.card.type = this.route.snapshot.paramMap.get('type') || 'bday1';
  }

  openDialog(url: string) {
    this.dialog
      .open(LinkModalComponent, { data: "http://localhost:4200/add-wishes/" + url})
      .afterClosed().subscribe(() => {});
  }

  onSubmit() {
    this.cardsService.createCard(this.card)
      .then(res => {
        this.card.id = res.id;
        this.emailService.scheduleEmail(this.card)
          .subscribe(() => this.openDialog(res.id));
      });
  }
}