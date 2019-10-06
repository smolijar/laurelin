import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { UserPublic } from '../user/user.model';

export type UserPrivate = UserPublic & {
  phoneNumber: string | null;
  lastSignInTime: Date;
  creationTime: Date;
  email: string;
};

export interface SessionState {
  user: UserPrivate | null;
}

export function createInitialState(): SessionState {
  return {
    user: null,
  };
}

@StoreConfig({ name: 'session', resettable: true })
@Injectable({ providedIn: 'root' })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }
}
