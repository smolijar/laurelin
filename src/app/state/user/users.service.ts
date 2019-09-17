import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { UsersStore, UsersState } from './users.store';
import { User } from './user.model';
import { tap } from 'rxjs/operators';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'users' })
export class UsersService extends CollectionService<UsersState> {
  constructor(store: UsersStore) {
    super(store);
  }
}
