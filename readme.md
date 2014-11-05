angular-nomnoml
=======
Hello, this is angular-nomnoml, an angular module and directive for nomnoml, the brilliant tool for drawing UML diagrams by Daniel Kallin.

## Install

```bash
$ bower install angular-nomnoml --save
```

Include the libraries in your web page:

```html
<script src="/bower_components/zeptojs/src/zepto.js"></script>
<script src="/bower_components/underscore/underscore.js"></script>
<script src="/bower_components/angular-nomnoml/libs/underscore.skanaar.js"></script>
<script src="/bower_components/angular-nomnoml/libs/dagre.min.js"></script>
<script src="/bower_components/angular-nomnoml/libs/skanaar.canvas.js"></script>
<script src="/bower_components/angular-nomnoml/libs/vector.js"></script>
<script src="/bower_components/angular-nomnoml/libs/nomnoml.jison.js"></script>
<script src="/bower_components/angular-nomnoml/libs/nomnoml.parser.js"></script>
<script src="/bower_components/angular-nomnoml/libs/nomnoml.layouter.js"></script>
<script src="/bower_components/angular-nomnoml/libs/nomnoml.renderer.js"></script>
<script src="/bower_components/angular-nomnoml/dist/angular-nomnoml.min.js"></script>
```

This is pretty messed up at the moment as nomnoml and most of its dependencies are not available as bower packages.

## Usage

Require angular-nomnoml as a dependency for your app:

```javascript
angular.module('app', ['angular-nomnoml']);
```

Create an uml chart:
```html
<canvas nomnoml nomnoml-source="
	[<frame>Decorator pattern|
		[<abstract>Component||+ operation()]
		[Client] depends --> [Component]
		[Decorator|- next: Component]
		[Decorator] decorates -- [ConcreteComponent]
		[Component] <:- [Decorator]
		[Component] <:- [ConcreteComponent]
	]
">
</canvas>
```

Created by <a href="http://www.jonatanpedersen.com">Jonatan Pedersen</a>.</p>

## Credits
This project was made possible by these cool libraries

- [nomnoml](https://github.com/skanaar/nomnoml/)
- [jison](http://zaach.github.io/jison/)
- [dagre](https://github.com/cpettitt/dagre)
- [underscore](http://underscorejs.org)
- [zepto](http://zeptojs.com/)

## Licence
The MIT License (MIT)

Copyright (c) 2014 Jonatan Pedersen http://www.jonatanpedersen.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
