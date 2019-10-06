import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Post } from '../state/post.model';
import { UserPublic } from 'src/app/state/user/user.model';

@Component({
  selector: 'lin-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  @Input()
  public post: Post;
  @Input()
  public user: UserPublic;
  @Input()
  public type: 'list' | 'detail';
  @Output()
  public delete: EventEmitter<string> = new EventEmitter();
  public emitDelete() {
    this.delete.emit(this.post.id);
  }
}
