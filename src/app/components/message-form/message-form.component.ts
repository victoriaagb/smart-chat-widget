import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message';
import { WidgetService } from '../../services/widget.service';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  message : Message;

  @Input('messages')
  private messages : Message[];

  constructor(private widgetService: WidgetService) {

  }

  ngOnInit() {
  }

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);
    const response = this.widgetService.getResponses('TEXT');
    // TODO  : read from the response
    console.log('response' + response);
    this.message = new Message('', 'assets/images/user.png');
  }

}
