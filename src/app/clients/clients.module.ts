import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientsComponent } from 'src/app/clients/components/clients.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ClientsComponent],
  exports: [ClientsComponent],
})
export class ClientsModule {}
