import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import { Card } from '../models/card.model';
import { Message } from '../models/message.model';

const COLLECTION_NAME: string = "cards";

export const EMPTY_CARD: Card = {
  recipient: '',
  email: '',
  sender: '',
  type: '',
  scheduledDate: {
    day: 2,
    month: 7,
    year: 2021
  },
  scheduledTime: {
    hour: 8,
    minute: 30,
    second: 0
  },
  messages: []
}

export const EMPTY_MESSAGE: Message = {
  url: "",
  message: "",
  signature: "",
  fontStyle: "Roboto",
  position: { x: 0, y: 0}
}

@Injectable({
  providedIn: "root"
})
export class CardsService {  
  constructor(private db: AngularFirestore) { }
  
  createCard(card: Card) {
    return this.db.collection(COLLECTION_NAME).add(card);
  }

  retrieveCard(cardId: string) {
    return this.db.collection(COLLECTION_NAME).doc(cardId).snapshotChanges();
  }

  addMessage(cardId: string, currentCard: Card, newMessage: Message) {
    return this.db.collection(COLLECTION_NAME).doc(cardId).set(
      { messages: currentCard.messages.concat(newMessage)}, {merge: true}
    )
  }
}
