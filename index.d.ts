// Type definitions for Nl2BrPipe
// Project: Nl2BrPipe
// Definitions by: tomsa.md

/*~ If this module is a UMD module that exposes a global variable 'myClassLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */

import { DomSanitizer } from "@angular/platform-browser";

// export as namespace Nl2BrPipe;

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */

/*~ If you want to expose types from your module as well, you can
 *~ place them in this block.
 */

declare class Nl2BrPipe {
  constructor(sanitizer: DomSanitizer);

  public transform(value: string): any;
}

export { Nl2BrPipe };
