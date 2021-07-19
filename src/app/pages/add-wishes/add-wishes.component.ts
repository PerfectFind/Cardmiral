import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService, EMPTY_CARD, EMPTY_MESSAGE } from '../../services/card.service';
import { Card } from '../../models/card.model';
import { MatDialog } from '@angular/material/dialog';
import { Message } from 'src/app/models/message.model';
import { GifSearchComponent } from 'src/app/components/gif-search/gif-search.component';
import { GifObject } from 'src/app/models/gif.model';
import { EMPTY_GIF } from 'src/app/services/gif.service';

@Component({
  selector: 'app-add-wishes',
  templateUrl: './add-wishes.component.html',
  styleUrls: ['./add-wishes.component.scss']
})
export class AddWishesComponent implements OnInit {
  cardId: string = '';
  selectedCard: Card = EMPTY_CARD;
  message: Message = EMPTY_MESSAGE;
  selectedGif: GifObject = EMPTY_GIF;
  constructor(
    private route: ActivatedRoute,
    public cardsService: CardsService,
    public dialog: MatDialog) {
    this.selectedCard.type = 'bday1';
  }
  ngOnInit() {
    this.cardId = this.route.snapshot.paramMap.get('id') || '';
    this.getCard();
  }
  openDialog() {
    this.dialog
      .open(GifSearchComponent, { data: this.selectedGif })
      .afterClosed().subscribe(result => {
        console.log(result);
        this.selectedGif = result;
        this.message.url = result.images.fixed_height.url;
      });
  }
  getCard() {
    this.selectedCard = TEST_CARD;
    // this.cardsService.retrieveCard(this.cardId)
    //   .subscribe(res => {
    //     this.selectedCard = res.payload.data() as Card;
    //   });
  }
  reset() {
    this.message = EMPTY_MESSAGE;
    this.selectedGif = EMPTY_GIF;
  }
  onSubmit() {
    console.log(this.selectedCard.messages.push(this.message));
    this.cardsService.addMessage(this.cardId, this.selectedCard, this.message)
      .then(() => this.reset());
  }
}

export const TEST_CARD: Card = {
  recipient: 'Ajileye',
  email: 'ola@mail.com',
  sender: 'Olawumi',
  type: 'bday1',
  scheduledDate: {
    day: 2,
    month: 7,
    year: 2021
  },
  scheduledTime: {
    hour: 12,
    minute: 30,
    second: 0
  },
  messages: [
    {
      url: "",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s!",
      signature: "01 - Ola",
      fontStyle: "Roboto",
      position: {
        x: 0,
        y: 0
      }
    },
    {
      url: "",
      message: "Congratulations!",
      signature: "02 - Wumi",
      fontStyle: "Helvetica Neue",
      position: {
        x: 0,
        y: 135
      }
    },
    {
      url: "",
      message: "Sed ut perspiciatis unde omnis iste natus error sit!",
      signature: "03 - Aji",
      fontStyle: "sans-serif",
      position: {
        x: 177,
        y: 135
      }
    },
    {
      url: "",
      message: "Many desktop publishing packages and web page editors!",
      signature: "04 - Leye",
      fontStyle: "Roboto",
      position: {
        x: 0,
        y: 230
      }
    },
    {
      url: "",
      message: "Congratulations!",
      signature: "05 - Wumi",
      fontStyle: "Roboto",
      position: {
        x: 0,
        y: 340
      }
    },
    {
      url: "",
      message: "Many desktop publishing packages and web page editors!",
      signature: "06 - Leye",
      fontStyle: "Roboto",
      position: {
        x: 0,
        y: 450
      }
    },
    {
      url: "",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s!",
      signature: "07 - Ola",
      fontStyle: "Roboto",
      position: {
        x: 0,
        y: 0
      }
    },
    {
      url: "",
      message: "Sed ut perspiciatis unde omnis iste natus error sit!",
      signature: "08 - Aji",
      fontStyle: "Roboto",
      position: {
        x: 0,
        y: 135
      }
    },
    {
      url: "",
      message: "Congratulations!",
      signature: "09 - Wumi",
      fontStyle: "Roboto",
      position: {
        x: 0,
        y: 240
      }
    },
    {
      url: "",
      message: "Many desktop publishing packages and web page editors!",
      signature: "10 - Leye",
      fontStyle: "Roboto",
      position: {
        x: 0,
        y: 350
      }
    }
  ]
}