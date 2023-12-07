// let x = 5;

// console.log(x)

// let a = [2,21,21,34,5,434,35]

// console.log(a)
// console.log(a.length)

// a.push(100)
// console.log(a[100])

// let b = ["car", "truck","bike"];
// console.log (b)

// console.log(b)

// console.log

let rectangle = {width:25, height:50,area:()=>{return 25*50}}
function area () {
    return 25*50 
}

let person1={name:'Jeff',age:46}
let person2={name:'Jashaun',age:15}
let person3={name:'Derron',age:15}


let people= [person1,person2,person3]

console.log(person1.age+person2.age+person3.age)

let sum=0;
for (let i=0;i<people.length; i++) {
    sum+=people[i].age;
}
console.log(sum/people.length);
