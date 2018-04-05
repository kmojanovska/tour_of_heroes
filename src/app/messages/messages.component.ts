import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: String[];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    // this.messages = this.messageService.messages;
    this.messageService.messagesSubject.subscribe((result: String[]) => this.messages = result);
  }

  onClear() {
    this.messageService.clear();
  }

}
