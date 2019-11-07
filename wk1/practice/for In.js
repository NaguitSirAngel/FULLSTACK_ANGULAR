let human = {
    hair: "Black",
    eyes: "Brown",
    age: "23"   
};

//using let to declare variable myKey that'll hold the property name
for (let myKey in human){
    //this works too
    console.log( myKey + ' --> ' + human[myKey]);
    
    
    //console.log("${myKey} --> ${human[myKey]}"); i do not know how to make this work im just gonna find out when i find out
    // I found out, use backtick(`) which is located near esc key
}

let abc = "abc";

for (let x of abc){

    console.log(x.toUpperCase().repeat(5));

}

//TEMPLATE LITERAL
let x = 5;
let z = 10;
 console.log(`Fifteen is ${x + z} and not ${ 2 * x + z}.`); 

//

var myArray = [1,2,3,4,5];

// .map is a function that creates another array by calling a function

myArray.map(function(myArray){

    return myArray.lenght
});
// you can also write this as

myArray.map(myArray =>{
    return myArray.lenght
});

console.log(myArray);


const names = {cat: "Bob", dog: "Fred"}

const {cat, dog} = names;
console.log({cat});



let myArr = [1,2,3,4,5];

let myMap = myArr.map(z => z * 2);
console.log(myArr);
console.log(myMap);

let myClassRect = class {

    constructor(height, width){
    this.height = height;
    this.width = width;

    }
}
class Cube {

    constructor(height,width){
        this.height = height;
        this.width = width;
    }

    myToString(){
        console.log(this.height + " and " + this.width)
    }
}    

//rect = myClassRect.constructor(8,8); THIS IS WRONG

let myCube = new Cube(5,5);
myCube.myToString();


