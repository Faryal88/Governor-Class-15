// Strutural Typing:
interface Ball {
	diameter:number
}

interface Sphere {
	diameter: number;
}

let ball: Ball = {
	diameter: 10,
};

let Sphere: Sphere = {
	diameter: 20,
};

ball = Sphere     //OK
Sphere = ball     //OK


// InLine Typing:
interface Tube{
	diameter:number,
	length:number,
}

let tube  :Tube = {
	diameter: 25,
	length: 30,
};

// tube = ball    //Error
ball = tube    //Ok

let person = {
	id: 1,
	name: "Faryal",
};                        // Creating the object

// person = {
// 	id: 2,
// 	fullName: "Faryal Abbasi",
// };                          // Errors

person = {
	id: 65,
	name: "Hafiza",
}


// Index Signature:
var obj : {
	id: number,
	[ABCD: string]: any
} = {
	id: 30,
	fullName: "Faryal Abbasi"
}

obj = {
	id: 456379,
	country: "Pakistan",
	fullName: "Farya",
	rollNo:22,
	isPass:() => true,
	fruits:[],
	marks:{}
}


// Stall & Fresh Object:
ball = tube;           // Stall Object
ball = {               // Fresh Object
	diameter: 98,
	// length: 457
}


// Asynchronous & Synchronous Programing:

// Synchronous Code:
console.log(1);
console.log(32);

function add(){
	return 5+5
}let result = add()
console.log(result);

// // Call Stack Function
// function one(cb: () => void ){
// 	console.log("one");
// 	cb()
	
// }

// // Callback Function
// function Two() {
// 	// Execution
// 	console.log("Two");
	
// }
// one(Two);

// // Settimeout
// function one(cb: () => void ){
// 	console.log("One");
	
// 	setTimeout(() => {
// 		console.log("After Two Second");
// 		cb()
// 	}, 2000);

// 	console.log("Three");
// }

// function Two(){
// 	console.log("I am Call back");
// }
// one(Two)

// Promisses Function
function MyFun(){
	return new Promise((resolve, reject) => {
		setTimeout(() =>{
			resolve("I am resolve");
		}, 2000);
	});
}
MyFun().then((res) =>{
	console.log(res);
});