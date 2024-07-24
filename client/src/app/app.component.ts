import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { MatIconRegistry, IconResolver } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, MatSlideToggleModule, MatBottomSheetModule, MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
  activeTheme = true;
  @ViewChild('bottomSheet') bottomSheetElRef?: TemplateRef<any>;
  bottomSheetRef?: MatBottomSheetRef;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private _bottomSheet: MatBottomSheet) {
    const resolver: IconResolver = (name) =>
      sanitizer.bypassSecurityTrustResourceUrl(`/assets/icons/${name}.svg`);
    iconRegistry.addSvgIconResolver(resolver);
  }

  dismissOpenSheet(event: MouseEvent): void {
    this._bottomSheet.dismiss();
    event.preventDefault();
  }

  openBottomSheet(): void {
    if(this.bottomSheetElRef) {
      this.bottomSheetRef = this._bottomSheet.open(this.bottomSheetElRef);
      this.bottomSheetRef.afterDismissed()
      .pipe(take(1))
      .subscribe(() => this.bottomSheetRef = undefined);
    }
  }

  switchTheme() {

    this.activeTheme = !this.activeTheme;
    console.log('Switch theme ', this.activeTheme);

  }
}
