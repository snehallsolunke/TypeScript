// var x : number = 10 ;

// //alert(x);

// console.log('x value is ', x);


// var s1: string = "You are the creater of your destiny";
// var s2: string = `Powerful people come from powerful places ${x}`;

// console.log(s1);
// console.log(s1);


// // Boolean 

// var b1: boolean = true;
// var b2: boolean = false;

// var b3: boolean;

// console.log(b1);
// console.log(b2);

// function test(): boolean {
//     return b3 = false;
//     console.log(b3);
//     b3 =true;
// }

// console.log(test());

import { isPallindrome } from "./utils";
console.log(isPallindrome(`madam`));

// Read only
class Student{
    public readonly name: string;
}
var obj=new Student();
//obj.name="Student"; // cant assigne value to the name as it is read only.

// static 
class Check{
    static bankName: string="Bank of India";
    customerName: string;
    accountNumber: number;

    display(){
        console.log(Check.bankName);
    }
}
// object
var Check2=new Check();
Check.bankName="BOI";
Check.display();