import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Post } from '../state/post.model';

@Component({
  selector: 'lin-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  @Input()
  public post: Post;
  @Output()
  public delete: EventEmitter<string> = new EventEmitter();
  public emitDelete() {
    this.delete.emit(this.post.id);
  }
}
