import { Query } from '@datorama/akita';
import { SessionState, SessionStore } from './session.store';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<SessionState> {
  constructor(protected store: SessionStore) {
    super(store);
  }
  signedIn = this.select(state => !!state.user);
  user = this.select(state => state.user);
  avatar = this.select(state => state.user.photoURL);
  name = this.select(state => state.user.displayName);
  email = this.select(state => state.user.email);
}
