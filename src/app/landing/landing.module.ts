import { NgModule } from '@angular/core';
import { LandingComponent } from './components/landing.component';
import { CommonModule } from '@angular/common';
import { NavBarModule } from '../navbar/navbar.module';
import { HeroModule } from '../hero/hero.module';
import { ClientsModule } from '../clients/clients.module';
import { WorkModule } from '../work/work.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    NavBarModule,
    HeroModule,
    ClientsModule,
    WorkModule,
    FooterModule,
  ],
  declarations: [LandingComponent],
  exports: [LandingComponent],
})
export class LandingModule {}
