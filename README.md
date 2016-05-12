Showdown Classify
=================


Markdown html class syntax sugar for showdown output

simple add `{.classname} to the end of image def

```
![image alt](http://lorempixel.com/400/200){.thumbnail}

```

and you'll get

```
<img alt="image alt" src="http://lorempixel.com/400/200" class="thumbnail" />
```

Instalation
-----------

```
bower install showdown-classify
```

```
npm install showdown-classify
```

Usage
-----

example usage in nodejs 

```javascript
const showdown = require('showdown');
require('showdown-classify');

let converter = new showdown.Converter({ extensions: ['classify'] });
let text = '![image alt](http://lorempixel.com/400/200){.thumbnail}';
let html = converter.makeHtml(text);

console.log(html)

// Output:
// <p><img class="thumbnail" src="http://lorempixel.com/400/200" alt="image alt" ></p>
```
