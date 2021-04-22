import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angularmultilanguage';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'nl','fr']);
    translate.setDefaultLang('en');
    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|nl|fr/) ? browserLang : 'fr');
  }
  switchLang(lang: string) {
  	this.translate.use(lang);
	}
}
