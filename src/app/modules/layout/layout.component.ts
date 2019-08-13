import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'lin-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
})
export class LayoutComponent implements OnInit {
  mobileQuery: Observable<boolean>;
  constructor(breakpointObserver: BreakpointObserver) {
    this.mobileQuery = breakpointObserver
      .observe('(max-width: 600px)')
      .pipe(map(state => state.matches));
  }

  ngOnInit() {}
}
