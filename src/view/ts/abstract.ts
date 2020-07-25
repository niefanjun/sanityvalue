declare type constructorSign = {new(...args: any[]):{}};
function classDecorator<T extends constructorSign>(constructor:T) {
	console.log(constructor);
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}




abstract class Animal {
    abstract makeSound(): void;
    name:string = '123';
    move(): void {
        console.log('roaming the earch...');
    }
}
@classDecorator
class Cat extends Animal {
	hello = 'cat';
	makeSound() {
		console.log('miaomiaomiao');
	}
	eatFood() {
		console.log('fish');
	}
}

let mycat = new Cat();
mycat.makeSound();
mycat.move();
console.log(mycat.hello);
// mycat.eatFood();
// declare type voidFunc = {():void}

interface Counter {
    (start: number): string;
    // interval: number;
    // reset(): void;
}

let count = function(start: unknown):void {} as Counter

// let foo = ((a: number, b = 1) => a * b) as {(x:number, y:number):number}
// let foo:{(a:number,b:number):number} = (a: number, b = 1) => a * b
let foo:(a:number,b:number)=>number = (a:number, b = 1) => a * b;
//let foo = (a: number, b: number = 1) => a * b;
enum Color {Red=3, Green, Blue}
let c: Color = Color.Green;

console.log(c,Color[4]);

console.log(foo(7,undefined));

interface Card {
	name:string[];
	draw:{(this: Card,flag:number):{():string}}
	// draw:(this: Card, flag: number) => () => string
}

const cardManager:Card = {
	name: ['Mo','Ma','Tr'],
	draw: function(this: Card, flag: number) {
		return () => {
			console.log(this.name,'----',flag)
			return this.name[Math.floor(Math.random() * 3)]
			// return 1;
		}
	}
}

let drawer = cardManager.draw(123);
let cardname = drawer()

// let cheater = cardManager.draw;
// let drawer = cheater();
// let cardname = drawer();


console.log(cardname);

interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
    info: string;
    onClickBad(e: Event) {
        // oops, used this here. using this callback would crash at runtime
        this.info = e.type;
        console.log(this.info);
    }
}
let h = new Handler();

let uiElement:UIElement = {
	addClickListener(onclick) {
		onclick(new Event('ok'));
	}
}
uiElement.addClickListener(h.onClickBad); // error!


// function loggingIdentity<T>(arg: T[]): T[] {
//     console.log(arg.length);  // Array has a .length, so no more error
//     return arg;
// }

function loggingIdentity<T>(arg: {
	type:T
}): T {
    console.log(arg.type);  // Array has a .length, so no more error
    return arg.type;
}


loggingIdentity({type: 1})

let bar = (option: {
	test:string
}) => {
	return 0;
}
bar({test: '123'})

let nfjtest = (x:number) => x || 1

console.log(nfjtest);

// function getCounter(): Counter {
//     let counter = function (start: number) {} as Counter;
//     counter.interval = 123;
//     counter.reset = function () { };
//     return counter;
// }
// let sealed = () => {
// 	return ():any => {
// 		// console.log(1)
// 		console.log(this.name);
// 	}
// }