import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from 'src/app/work/components/work.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [WorkComponent],
  exports: [WorkComponent],
})
export class WorkModule {}
