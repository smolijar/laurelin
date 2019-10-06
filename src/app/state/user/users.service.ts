import { Injectable } from '@angular/core';
import { UsersStore, UsersState } from './users.store';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'users' })
export class UsersService extends CollectionService<UsersState> {
  constructor(store: UsersStore) {
    super(store);
  }
}
