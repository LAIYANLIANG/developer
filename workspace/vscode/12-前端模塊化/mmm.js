//1、導入的{}中定義的變量
import { flag,sum } from "./aaa.js";

if (flag) {
    console.log('小明小明小明');
    console.log(sum(20,30));
}

//2、直接導入export
import { num1,height } from "./aaa.js";
console.log(num1);
console.log(height);

//3、導入export的function
import { mul } from "./aaa.js";
console.log(mul(30,50));