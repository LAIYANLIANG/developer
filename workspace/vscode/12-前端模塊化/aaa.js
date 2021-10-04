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
export{
    flag,sum
}

//2、導出方式二：
export var num1=1000;
export var height=1.88;

//3、導出函數/類
export function mul(num1,num2){
    return num1*num2
}