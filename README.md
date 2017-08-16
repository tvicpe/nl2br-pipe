nl2br-pipe
=====
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Methods](#methods)
5. [Git repository](#git)
6. [Version](#version)

### <a name="description"></a>1. Description
`nl2br-pipe` or `Nl2BrPipe` is a pipe for angular2 projects 
which replaces the new line characters `\n` in a string with 
the `<br />` tag.
  
### <a name="installation"></a>2. Installation
Install the module into your application and save it as a dev 
dependency in your `package.json` file  
```
npm install nl2br-pipe --save
```

### <a name="usage"></a>3. Usage
In order to use the `Nl2BrPipe` you have to include/import 
it into your application:

```typescript
import {Nl2BrPipe} from "nl2br-pipe";
```

Include it in your components declarations list in your `@NgModule(...)`:
```typescript
@NgModule({
  //...
  declarations: [Nl2BrPipe],
  //...
})
```

Use it in your template to replace new line characters `\n` with 
the `<br />` tag:
```angular2html
<div [innerHTML]="'<strong>test html content</strong>\nnew line\nthird line' | nl2br"></div>
```
  
Output:
```html
<div>
  <strong>test html content</strong><br />new line<br />third line
</div>
```
  
  
### <a name="methods"></a>4. Methods
  
#### transform(value: string): string
Replace the new line characters `\n` in a string with 
the `<br />` tag
Bypass security and trust the given value to be safe HTML. 
The sanitizer will leave safe HTML intact and will replace new line 
character `\n` with the `<br />` tag.  
**WARNING:** calling this method with untrusted user data exposes your 
application to XSS security risks!
  
*Parameters:*  
**value** - string where to replace `\n` with `<br />` and not to 
escape the HTML tags.  
  
*Return:*  
Method returns the new string containing `<br />` tag 
instead of `\n`.  
  
  
### <a name="git"></a>5. Git repository
[https://github.com/tvicpe/nl2br-pipe](https://github.com/tvicpe/nl2br-pipe)

### <a name="version"></a>6. Version
0.0.6
