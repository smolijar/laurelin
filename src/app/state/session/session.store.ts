import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { User } from 'firebase';

export interface SessionState {
  user: {
    uid: string;
    photoURL: string | null;
    phoneNumber: string | null;
    lastSignInTime: Date;
    creationTime: Date;
    email: string;
    displayName: string;
  } | null;
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
