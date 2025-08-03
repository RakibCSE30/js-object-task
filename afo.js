//  Array declaration 
const number = [23,432,21,321];
// print array using loop(for of)
for(num of number)
{
    console.log(num);
    
}

//................... function.................. 
// 1. Normal function
function addTwoNum(num1,num2){
    return num1+num2;

}
console.log('The sum of the number is: ');

console.log(addTwoNum(2,6));

// 2.Arrow function
console.log('Now visite array function');
// no parameters
 const addTwo=()=>55;
console.log(addTwo());
// One parameters
const onePara= a =>a*2;
console.log(onePara(3));
// multiple parameters
const addThreeNumber=(a,b,c)=>a+b+c;
console.log(addThreeNumber(2,3,5));

// for bracket
const mulpara=(a,b,c)=>{
    return a*b*c;
}
console.log(mulpara(2,6,5));



// array copy 
const currentNumber=[23,435,546,34];
const copyNumber=currentNumber;
const spradeOperator=[...currentNumber,9201,3];
currentNumber.push(65);
console.log('The copy array is');
console.log(currentNumber);
console.log(copyNumber);
// Its create a problem because of the arrray is not premitive data type.
// if you can change one it can change it's reference 
// if you update then the reference has been same location
//   ................... Solution is ...Operator


console.log(spradeOperator);



// Object 
const object ={
    name: 'Rakib',
    age: 23,
    department: 'CSE'
};
const obj=object.name;
// full obj Print
 console.log(object);
//  ..............3 type of the print of the obj
 console.log(object['department']);
 console.log(object.age);
 console.log(obj);
 
//  Tamplate string

const about = `   The name of the ${object['name']} and the number is ${number[3]}`;
console.log(about);

 
 

 
 









