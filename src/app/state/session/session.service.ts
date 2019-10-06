import { SessionStore, UserPrivate } from './session.store';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserPublic } from '../user/user.model';

const pickPublic = (user: UserPrivate): UserPublic => ({
  displayName: user.displayName,
  photoURL: user.photoURL,
  uid: user.uid,
});

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(
    private sessionStore: SessionStore,
    private fireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore
  ) {}

  async signIn() {
    this.sessionStore.setLoading(true);
    const { user: fireUser } = await this.fireAuth.auth.signInWithPopup(
      new auth.GoogleAuthProvider()
    );
    const user = {
      uid: fireUser.uid,
      photoURL: fireUser.photoURL,
      phoneNumber: fireUser.phoneNumber,
      creationTime: new Date(fireUser.metadata.creationTime),
      lastSignInTime: new Date(fireUser.metadata.lastSignInTime),
      email: fireUser.email || '',
      displayName: fireUser.displayName,
    };
    this.sessionStore.update({
      user,
    });
    await this.angularFirestore
      .collection<UserPublic>('users')
      .doc(user.uid)
      .set(pickPublic(user));
    this.sessionStore.setLoading(false);
  }

  async signOut() {
    this.sessionStore.setLoading(true);
    await this.fireAuth.auth.signOut();
    this.sessionStore.reset();
  }
}
