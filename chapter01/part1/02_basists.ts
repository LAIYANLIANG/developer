let a: number;

a = 10;
//a='hello';

let b: string;
b = 'hellow'
//b=12

//如果變量的聲明和賦值同時進行，TS可以自動對變量進行類型檢測!!!
let c: boolean = true;
let d = true;


function sum(e:number, f:number) :number/*在函數外面的，是指反回值屬性!!!*/{
    return e + f;
}



console.log(sum( 123,  456));


