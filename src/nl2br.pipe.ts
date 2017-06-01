import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'nl2br'
})
export class Nl2BrPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: string): string {
    let result: string = '';
    if (value) {
      result = value.replace(/(?:\r\n|\r|\n)/g, '<br />');
      result = this.sanitizer.bypassSecurityTrustHtml(result);
    }

    return result;
  }
}
