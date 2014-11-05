angular-nomnoml
=======

Hello, this is angular-nomnoml, an angular module and directive for nomnoml.


```
#!html
<canvas nomnoml nomnoml-source="
	[<frame>Decorator pattern|
		[<abstract>Component||+ operation()]
		[Client] depends --> [Component]
		[Decorator|- next: Component]
		[Decorator] decorates -- [ConcreteComponent]
		[Component] <:- [Decorator]
		[Component] <:- [ConcreteComponent]
	]"></canvas>
```

Created by <a href="http://www.jonatanpedersen.com">Jonatan Pedersen</a>.</p>

###angular-nomnoml was made possible by these cool projects

- [nomnoml](https://github.com/skanaar/nomnoml/)
- [jison](http://zaach.github.io/jison/)
- [dagre](https://github.com/cpettitt/dagre)
- [underscore](http://underscorejs.org)
- [typicons](http://typicons.com/)
- [zepto](http://zeptojs.com/)
- [solarized](http://ethanschoonover.com/solarized)
