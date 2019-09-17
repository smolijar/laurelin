export interface User {
  uid: string;
  photoURL: string | null;
  phoneNumber: string | null;
  lastSignInTime: Date;
  creationTime: Date;
  email: string;
  displayName: string;
}

/**
 * A factory function that creates Users
 */
export function createUser(params: Partial<User>) {
  return {} as User;
}
