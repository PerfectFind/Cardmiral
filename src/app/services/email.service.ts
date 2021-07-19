import { Injectable } from "@angular/core";
import { Card } from '../models/card.model';
import { HttpClient } from "@angular/common/http";

interface RequestBody {
  toEmail: string
  date: string
  month: string
  hour: string
  minute: string
  cardUrl: string
}

@Injectable({
  providedIn: "root"
})
export class EmailService {  
  constructor(private http: HttpClient) { }

  emailUrl: string = 'http://127.0.0.1:3000/scheduleEmail';
  
  scheduleEmail(card: Card) {
    let cardData: RequestBody = {
      toEmail: card.email,
      date: card.scheduledDate?.day.toString() || '',
      month: card.scheduledDate?.month.toString() || '',
      hour: card.scheduledTime?.hour.toString() || '',
      minute: card.scheduledTime?.minute.toString() || '',
      cardUrl: 'http://localhost:4200/view-card/' + card.id
    }
    console.log(cardData);

    return this.http.post<RequestBody>(this.emailUrl, cardData, {headers:{ "content-type": 'application/json'}});
  }
}
