import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'nl2br'
})
export class Nl2BrPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(value: string, sanitizeBeforehand: boolean): string {
        if (typeof value !== 'string') return value // Protect against runtime errors

        let textParsed = value.replace(/(?:\r\n|\r|\n)/g, '<br />')

        if (sanitizeBeforehand) {
            textParsed = this.sanitizer.sanitize(SecurityContext.HTML, textParsed)
        }

        return textParsed
    }
}
