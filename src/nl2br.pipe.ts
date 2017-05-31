import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'nl2br'
})
export class Nl2BrPipe implements PipeTransform {

  transform(value: string): string {
    let result: string = '';
    if (value) {
      result = value.replace(/(?:\r\n|\r|\n)/g, '<br />');
    }

    return result;
  }
}
