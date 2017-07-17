# Readme

+ Components and their Templates
+ Template Syntax
+ Services using Dependency Injetion
+ Routing
+ HTTP and Data

> We can use ES5, ES2015, or TypeScript to write Angular 2.

## Resources

+ [code along](http://jpapa.me/a2firstlook)
+ [Docs](https://angular.io/docs/)
+ [CHEAT SHEET](https://angular.io/docs/ts/latest/cheatsheet.html)
+ [Tour of Heroes TUTORIAL](https://angular.io/docs/ts/latest/tutorial/)

---

## [Architecture](./docs/architecture.md)

## [Essentials](./docs/essentials.md)

## [Displaying Data](./docs/displaying-data.md)

## [Services, Dependency Injection, and Component Lifecycle Hooks](./docs/services-dependency-injection-lifecycle-hooks.md)

## [Data with Http](./docs/http.md)

## [Routing](./docs/routing.md)

---

## Typescript

+ linter Activado siempre
+ identación 2 espacios, espacios!
+ lambdas sin parentesis si no tiene q venir tipada
+ todas las variables, campos de clase e instancias de clase tienen q tener el nombre de la interfaz / tipo que representan en camelCase.
+ no renombramos dependencias a menos q importamos una librería de terceros
+ ordenamos las dependencias q importamos de **más global a menos** (Empezando por librerías de terceros), empezando x las librerías, funciones y operadores. Y posteriormente nuestro código siguiendo el mismo patrón.
+ los métodos, tienen q adquirir un nombre con la accioón y la entedidad sobre la que operan. e.g.: updateEntry, deleteCar, ...
+ al definir métodos las variables del payload o firma del método tienen que venir representadas con un nombre que defina su tipo. e.g. updateEntry(entry: Entry)
+ lo anterior tb se aplica a los campos de una clase.
+ no pueden haber nunca, ningún tipo de variable, campo de clase o dependencia sin usar.
+ configurar linter para que no permita lineas más largas de 100

## HTML

+ al definir *selectores* de componentes el selector se tiene que corresponder con el nombre de la clase. e.g. EntryComponent --> at-entry.
+ tenemos que intentar evitar las etiquetas en cuanto sea posible.
+ en el momento que el componente supera las 25 lineas de codigo, promocionarlo a un template.html
+ no dejar **jamás** más de dos líneas de espacio en blanco.

## CSS / SASS

+ utilizar nomenclatura BEM, Seperando bloques que contienen elementos que a sí mismo pueden tener modificadores. e.g. entry__title_highlighted
+ los bloques diferentes aunque estén anidados en el DOM tendrán estilos no anidados en el SASS, y sólo estarán anidados en el SASS si éstos estilos dependen del hecho de estar dentro.