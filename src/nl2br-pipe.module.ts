import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Nl2BrPipe} from './nl2br.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        Nl2BrPipe
    ],
    exports: [Nl2BrPipe]
})
export class Nl2BrPipeModule {
}
