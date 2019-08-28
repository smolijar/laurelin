import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['cs']);
    translate.setDefaultLang('cs');

    const browserLang = translate.getBrowserLang();
    translate.use(translate.getLangs().find(l => l === browserLang) || 'cs');
    console.log(translate.currentLang);
  }
}
