import { SessionStore } from './session.store';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(
    private sessionStore: SessionStore,
    private fireAuth: AngularFireAuth
  ) {}

  async signIn() {
    this.sessionStore.setLoading(true);
    const { user } = await this.fireAuth.auth.signInWithPopup(
      new auth.GoogleAuthProvider()
    );
    this.sessionStore.update({
      user: {
        uid: user.uid,
        photoURL: user.photoURL,
        phoneNumber: user.phoneNumber,
        creationTime: new Date(user.metadata.creationTime),
        lastSignInTime: new Date(user.metadata.lastSignInTime),
        email: user.email || '',
        displayName: user.displayName,
      },
    });
    this.sessionStore.setLoading(false);
  }

  async signOut() {
    this.sessionStore.setLoading(true);
    await this.fireAuth.auth.signOut();
    this.sessionStore.reset();
  }
}
