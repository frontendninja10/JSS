# Day 9

## Object.values()

The Object.values() method returns an array of a given object's own enumerable property values.

# Day 10

## Explore Differences Between the var and let Keywords

One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations. Because this behavior does not throw an error, searching for and fixing bugs becomes more difficult.
A keyword called let was introduced in ES6, a major update to JavaScript, to solve this potential issue with the var keyword.
So unlike var, when you use let, a variable with the same name can only be declared once.

## JavaScript Scopes

1. In JavaScript, there are 3 different types of scope: _Block_ scope (ES6), _Function_ scope and _Global_ scope.
2. Block-scoped variables cannot be accessed from outside the block.
3. _let_ and _const_ provide Block scope in JavaScript, _var_ does not.A variable declared with _var_ inside a block scope becomes globally scoped. But if the block was inside a function, then the variable has function scope.
4. Function-scoped variables cannot be from outside the function.
5. Variables declared with _var_, _let_ and _const_ all have function scope.
6. Global-scoped variables cannot be accessed from anywhere in the program.
7. Variables declared with _var_, _let_ and _const_ all have global scope.

## Mutating an Array with const

You can mutate an array/object declared with the cosnt keyword but you cannot directly assign that variable to another array/object.

## Object.freeze()

The const keyword does not necessarily protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function Object.freeze() to prevent data mutation. The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.

# Day 11

## Default function parameters

I learnt today that default function parameters were introduced to the JavaScript language in ECMAScript 2015. _Parameter defaults_ enable us to write functions that can be invoked with fewer _arguments_ than _parameters_.

## Rest parameters

I also learnt that rest parameters were introduced to the JavaScript language in ECMAScript 2015. Rest parameters enable the opposite case: they allow us to write functions that can be invoked with arbitrarily more arguments than parameters.
These kind of functions are called: _variadic_ functions, _variable arity_ functions or _varargs_ functions.\
The rest parameters literally mean "gather the unassigned arguments into an array".
We can choose to get the first parameters as variables, and gather only the rest but note that the rest parameters must be at the end.

## Spread operator

This does the reverse of what the rest parameters do. The spread operator is used to pass an array to functions that normally require a list of many
arguments. The spread operator is used to unpack, or “spread out,” the elements of an array (or any other iterable object, such as strings) in a context where individual values are expected

## Destructuring Assignment

### Why do you need to '_destructure_'?

The two most used data structures in JavaScript are _Object_ and _Array_.\
Objects --> allow us to create a single entity that stores data items by key
Arrays --> allow us gather data items into an ordered collection\
But when we pass those to a function, it may need not an object/array as a whole, but rather
individual pieces.

### So what then is 'Destructuring Assignment'?

Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

In a destructuring assignment, the value on the righthand
side of the equals sign is an array or object (a “structured” value), and the lefthand side specifies one or more variable names using a syntax that mimics array and object literal syntax.\

When a destructuring assignment occurs, one or more values are
extracted (“destructured”) from the value on the right and stored into the variables named on the left.

# Day 12

## Constructor Functions

The regular {...} syntax allows to create one object. But often we need to create _many_
similar objects, like multiple users or menu items and so on.
That can be done using _constructor functions_ and the "new" operator.\
Constructor functions technically are regular functions.

### Conventions for writing constructor functions

1. They are named with capital letters
2. They should be executed only with the "new" operator

![](assets/images/constructors.jpg)
The main purpose of constructors is: _to implement reusable object creation code_.

# Day 14

## Getters and Setters

Properties in JavaScript can be classified as data or accessor properties. Data properties that consist of a key-value pair. Accessor properties do not have key-value pairs but solely consist of methods called _getters_ and _setters_.\
Getters and Setters are defined using the keywords get and set respectively.
Once a property is defined with get prop() or set prop() , it’s an accessor property, not a data property any more.

When a data property is read, the value associated with it is returned while, when an accessor property is read, the getter method is invoked. And whatever gets returned is the value of the access expression.\
When a data property is assigned a value, the property value gets changed (or a new property is added if it wasn't existing before) while, when an accessor property is assigned to a value, JavaScript invokes the setter method, passing the value of the righthand side of the assignment as an argument to the setter method (this method is responsible for “setting,” in some sense, the value of a data property). The return value of the setter method is ignored.

Using getters over regular methods provide a simpler syntax.

# Day 15

A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so.

A promise has three states: pending, fulfilled, and rejected. A promise created empty is forever stuck in the pending state because you did not add a way to complete the promise. The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail.

The then method is executed immediately after your promise is fulfilled with resolve.

catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called.

# Day 24

## What is the terminal?

Terminal is an application that lets you interact with your computer. You usually give instructions to your computer through clicking around in applications or typing keys to make things happen.
Terminal lets you do many of the same things; it’s just more direct. You can give clear, structured orders to your computer using the terminal. You just have to be patient and willing to try them!

You can also use Terminal to create, open, and update files, which will save you hours of time if you ever want to become a web developer or designer. Sometimes, you may need to interact with files that do not live in your computer but a server. Servers do not have screens which means that you may not be able to interact withe the files or codebase using a _GUI_ (Graphic User Interface).

In order to see where you are at any time within your computer, you can type the command pwd . pwd stands for print working directory.
"Directory" in the world of computers just means "folder." By running this command, we're asking our computer which folder we're in.

## Navigation

The ls and cd commands are useful for navigating through your system.
