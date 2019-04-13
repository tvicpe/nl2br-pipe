nl2br-pipe
=====
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Methods](#methods)
5. [Git repository](#git)
6. [Build](#build)
7. [Publish to npm](#publish)
8. [Version](#version)

### <a name="description"></a>1. Description
`nl2br-pipe` or `Nl2BrPipe` is a pipe for angular2 projects 
which replaces the new line characters `\n` in a string with 
the `<br />` tag.
  
### <a name="installation"></a>2. Installation
Install the module into your application and save it as a dev 
dependency in your `package.json` file  
```
npm install nl2br-pipe --save-dev
```

### <a name="usage"></a>3. Usage
In order to use the `Nl2BrPipe` you have to include/import its module 
into your application:

```typescript
import {Nl2BrPipeModule} from 'nl2br-pipe';
```

Include it in your component's `imports` list of your `@NgModule(...)`:
```typescript
@NgModule({
  //...
  imports: [Nl2BrPipeModule],
  //...
})
```

Use it in your template to replace new line characters `\n` with 
the `<br />` tag:
```angular2html
<!-- Angular2.x -->
<div [innerHTML]="'<strong>test html content</strong>\nnew line\nthird line' | nl2br"></div>
```
```angular4html
<!-- Angular4+ -->
<div [innerHTML]="'<strong>test html content</strong>\nnew line\nthird line' | nl2br"></div>

<!-- sanitize forcibly the string -->
<div [innerHTML]="'<strong>test html content</strong>\nnew line\nthird line' | nl2br : true"></div>
```
  
Output:
```html
<div>
  <strong>test html content</strong><br />new line<br />third line
</div>
```
  
  
### <a name="methods"></a>4. Methods
  
#### transform(value: string, sanitizeBeforehand?: boolean): string
Replace the new line characters `\n` in a string with 
the `<br />` tag
Bypass security and trust the given value to be safe HTML. 
The sanitizer will leave safe HTML intact and will replace new line 
character `\n` with the `<br />` tag.  

**WARNING:** in Angular version `2.x`, calling this method with 
untrusted user data exposes your application to XSS security risks!
  
*Parameters:*  
**value** - string where to replace `\n` with `<br />` and not to 
escape the HTML tags.  
**sanitizeBeforehand** - optional boolean parameter which allows you 
optionally to sanitize the `value` string. Parameter is available only 
for Angular `4+`.  
  
*Return:*  
Method returns the new string containing `<br />` tag instead of `\n`.  
  
  
### <a name="git"></a>5. Git repository
[https://github.com/tvicpe/nl2br-pipe](https://github.com/tvicpe/nl2br-pipe)

### <a name="build"></a>6. Build
To build the final package run this command:
```
ng build nl2br
```
The build process will generate the packed sources into the `dist` folder.  

### <a name="publish"></a>7. Publish to npm
To publish the new version to `npm`, go into the `dist` folder:
```
cd ./dist/nl2br
```
and publish it to npm:
```
npm publish
```

### <a name="version"></a>8. Version
1.2.3
