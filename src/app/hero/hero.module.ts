import { NgModule } from '@angular/core';
import { HeroComponent } from './components/hero.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [HeroComponent],
    exports: [HeroComponent]
})

export class HeroModule {}