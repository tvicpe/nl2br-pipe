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
the `&lt;br/&gt;` tag.
  
### <a name="installation"></a>2. Installation
Install the module into your application and save it as a dev 
dependency in your `package.json` file  
```
npm install nl2br-pipe --save-dev
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
the `&lt;br/&gt;` tag:
```angular2html
<div>{{'test html content\nnew line\nthird line' | nl2br }}</div>
```
  
Output:
```html
<div>
  test html content<br/>new line<br/>third line
</div>
```
  
  
### <a name="methods"></a>4. Methods
  
#### transform(value: string): string
Replace the new line characters `\n` in a string with 
the `&lt;br/&gt;` tag
  
*Parameters:*  
**value** - string where to replace `\n` with `&lt;br/&gt;`.  
  
*Return:*  
Method returns the new string containing `&lt;br/&gt;` tag 
instead of `\n`.  
  
  
### <a name="git"></a>5. Git repository
[https://github.com/tvicpe/nl2br-pipe](https://github.com/tvicpe/nl2br-pipe)

### <a name="version"></a>6. Version
0.0.1