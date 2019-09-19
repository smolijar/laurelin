import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserWidgetComponent } from './user-widget/user-widget.component';
import { I18nModule } from '../shared/i18n/i18n.module';
import { RouterModule } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper.component';

@NgModule({
  declarations: [LayoutComponent, UserWidgetComponent, WrapperComponent],
  imports: [
    I18nModule,
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatCardModule,
    RouterModule,
  ],
  exports: [LayoutComponent, WrapperComponent],
})
export class LayoutModule {}
