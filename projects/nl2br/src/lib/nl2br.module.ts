import { NgModule } from '@angular/core';
import { Nl2brComponent } from './nl2br.component';
import { Nl2brPipe } from './nl2br.pipe';

@NgModule({
  declarations: [Nl2brComponent, Nl2brPipe],
  imports: [
  ],
  exports: [Nl2brComponent, Nl2brPipe]
})
export class Nl2brModule { }
