//https://www.bilibili.com/video/BV15741177Eh?p=75&spm_id_from=pageDriver
var name = '小明'
var age = 18
var flag = true

function sum(sum1, sum2) {
    return sum1 + sum2;
}
if (flag) {
    console.log(sum(20, 30));
}

//1、導出方式一：
export {
    flag, sum
}

//2、導出方式二：
export var num1 = 1000;
export var height = 1.88;

//3、導出函數/類
export function mul(num1, num2) {
    return num1 * num2
}
//定義類
export class Person {
    run() {
        console.log('在奔跑');
    }
}

//5.導出類  export default
//默認的，只能有一個!!!
const address = '北京市'
/* export default address */
export default function (arguement) {
    console.log(arguement);
}