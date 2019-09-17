export interface UserPublic {
  uid: string;
  photoURL: string | null;
  displayName: string;
}

/**
 * A factory function that creates Users
 */
export function createUser(params: Partial<UserPublic>) {
  return {} as UserPublic;
}
