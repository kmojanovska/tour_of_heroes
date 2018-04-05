import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MessageService {

  messagesSubject: BehaviorSubject<String[]> = new BehaviorSubject([]);
  // messages: String[] = [];

  constructor() {}

  add(message: string) {
    // this.messages.push(message);
    const messagesNext =  this.messagesSubject.getValue();
    messagesNext.push(message);
    this.messagesSubject.next(messagesNext);
  }

  clear() {
    this.messagesSubject.next([]);
    // this.messages.splice(0, this.messages.length);
  }

}
