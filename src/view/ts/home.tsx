import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './abstract';
import {
	render
} from 'react-dom';

interface IProps {
	name: string;
}

interface IState {
	color: "yellow" | "blueviolet"
	// color: 'yellow' | 'blue'
}

// let test : string = 123
// let test : Array<number|string> = [1,2,3,'4']
// let test2 : [string, number];
// test2[0].split('1')
// test2[1] = 1
// test2[2] = 1

function test3(...arr: Array<any>): number {
	let x = 2;
	console.log(arr);
	return x;
}

interface Point {
	readonly x: number;
	y: number;
}

let p: Point = {
	x: 10,
	y: 20
}
// p.x = 5

interface rect {
	w?: number,
	h?: number,
	go: () => number
}

let demo:rect = {
	w: 1,
	h: 2,
	go: () => 1
}


// interface squreFuc {
// 	(w: number, h: number): boolean;
// }

// declare type squreFuc = (...arr:any[]) => boolean
declare type squreFuc = {(w: number, h: number):boolean}


function squre({ w, h }: rect): number {
	return w * h;
}

let squre2: squreFuc;
squre2 = function(w, h) {
	return w > h
}

interface StringArray {
	zzz: number;
	[index: number]: string;
}

let stringArr: StringArray = {
	zzz: 123
};

stringArr['zzz'] = 123


interface GenericIdentityFn<T> {
	(arg: T): T;
}

function identity<T>(arg: T): T {
	console.log(arg);
	return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;

let stataColor: IState['color'] = 'yellow';

// function sealed(constructor: any, propertyKey: string, descriptor: PropertyDescriptor) {
// 	console.log(arguments);
// 	console.log(constructor);
// 	// return (message: string):any {
// 	//        this.greeting = message;
// 	//    }
// }

// function color(value: string) {
// 	return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
// 		console.log(target, propertyKey, descriptor);
// 	}
// }

// function f() {
// 	console.log("f(): evaluated");
// 	return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
// 		console.log("f(): called");
// 		console.log(target);
// 	}
// }

// function g() {
// 	console.log("g(): evaluated");
// 	return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
// 		console.log("g(): called");
// 	}
// }

// // let nfjtest = () => {}

// // @sealed
// // let nfjtest = 2;

// // @sealed
// // class C {
// //     /*@f()
// //     @g()
// //     method() {}*/
// //     // @f()
// //     // @color('test')
// //     @sealed
// //     method(){}
// //     // public test = {
// //     // 	count: 1
// //     // }
// // }

// // interface fooNew {
// // 	(...args: number[]): {};
// // }

// interface classTest {
// 	// now: (d: Date)=>Date
// 	now(d:Date):Date
// }

// interface newTest {
// 	new (d:number, m:number):classTest
// }

// // let getTime : classTest = (Date) => {
// // 	return Date;
// // }

// let getTime : classTest = {
// 	now: function(Date) {
// 		return Date;
// 	}
// }

// class Time implements classTest {
// 	constructor(d:number, m:number) {
// 		// this.d = d;
// 		// this.m = m;
// 	}
// 	now(Date: Date) {
// 		return Date;
// 	}
// }

// declare type fooNew = {(...args:number[]):{}}

// interface fooStr {
// 	name: string;
// 	[name: string]: any;
// 	[name: number]: number
// }

// declare type nfjtest = {new(...args: any[]):{}};

// function classDecorator<T extends nfjtest>(constructor:T) {
// 	console.log(constructor);
//     return class extends constructor {
//         newProperty = "new property";
//         hello = "override";
//     }
// }

// // function classDecorator(constructor:any) {
// // 	console.log(constructor);
// //     return class extends constructor {
// //         newProperty = "new property";
// //         hello = "override";
// //     }
// // }

// @classDecorator
// // @classLog
// class Greeter {
// 	property:string = "property";
// 	hello: string;
// 	show: {():string};
// 	constructor(m: string) {
// 		this.hello = m;
// 	}
// }
// let greeterItem = new Greeter('good');
// greeterItem.property = 'zzz'
// console.log(greeterItem);

// let foo: fooNew = (a, b, c) => {
// 	return {};

// }

// let foo2: fooStr = {
// 	name: '123',
// 	sex: 111,
// }
// foo2[0] = 1

// console.log(foo(1, 2, 3));


// interface Shape {
//     color: string;
// }

// interface Square extends Shape {
//     sideLength: number;
// }

// let square = {} as Square;

// square.color = "blue";
// square.sideLength = 10;


// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
// }

// function getCounter(): Counter {
//     let counter = function (start: number) { } as Counter;
//     counter.interval = 123;
//     counter.reset = function () { };
//     return counter;
// }

// console.log('>>>>>>>>>>>>>>>>>>>>>');


// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;
// console.log(c);

// interface single {
// 	(start: string): number;
//     // (start: number): string;
// }

// let singleTest:single = function(s: string) {
// 	return 123;
// };


// class Animal {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }

// class Rhino extends Animal {
// 	private age: number = 8;
// 	showAge():void {console.log(this.age)};
//     constructor() { super("Rhino"); }
// }

// // declare type voidFunc = () => void;
// declare type voidFunc = {():void}

// class Employee {
//     // private name: string;
//     constructor(private name: string) { }
//     // showName():void {console.log(this.name)}
//     showName:voidFunc = () => {console.log(this.name)}
// }

// let animal = new Animal("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");
// employee.showName();
// // rhino = animal;
// animal = rhino;
// // animal.showAge()
// rhino.showAge()
// animal = employee; // 错误: Animal 与 Employee 不兼容.

class Home extends React.Component<IProps, IState> {

	constructor(props: IProps) {
		super(props);
		// console.log(myIdentity);
		// myIdentity(1)
		// identity<number>(1)
		// console.log(stringArr);
		// console.log(test3(true,2,3))
		// console.log(squre({
		// 	w:2,
		// 	h:4
		// }));
	}
	public state = {
		// color: 'yellow' as IState['color']
		color: stataColor
	}

	public onClickColor = () => {
		const {
			color
		} = this.state;
		if (color === "yellow") {
			this.setState({
				color: "blueviolet"
			});
		}
		if (color === "blueviolet") {
			this.setState({
				color: "yellow"
			});
		}
	}
	render() {
		const {
			name
		} = this.props;
		const {
			color
		} = this.state;
		return (
			<div>
				<span style={{ color }}>{name}</span>
				<button onClick={this.onClickColor}>变颜色</button>
			</div>
		);
	}
}







export default Home;