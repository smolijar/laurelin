import { Component, OnInit } from '@angular/core';
import { SessionQuery } from 'src/app/state/session/session.query';
import { SessionService } from 'src/app/state/session/session.service';

@Component({
  selector: 'lin-user-widget',
  templateUrl: './user-widget.component.html',
  styleUrls: ['./user-widget.component.sass'],
})
export class UserWidgetComponent {
  constructor(
    private sessionService: SessionService,
    public sessionQuery: SessionQuery
  ) {}

  signIn() {
    this.sessionService.signIn();
  }

  signOut() {
    this.sessionService.signOut();
  }
}
