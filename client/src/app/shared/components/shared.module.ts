import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';
import { LoadingModalComponent } from './loading-modal/loading-modal.component';
import { DestroyComponent } from './destroy/destroy.component';


@NgModule({
  declarations: [PageHeaderComponent, LoadingModalComponent, DestroyComponent],
  imports: [
    CommonModule
  ],
  exports: [PageHeaderComponent, LoadingModalComponent, DestroyComponent]
})
export class SharedModule { }
