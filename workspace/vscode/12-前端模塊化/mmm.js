//https://www.bilibili.com/video/BV15741177Eh?p=75&spm_id_from=pageDriver

//1、導入的{}中定義的變量
import { flag, sum } from "./aaa.js";

if (flag) {
    console.log('小明小明小明');
    console.log(sum(20, 30));
}

//2、直接導入export
import { num1, height } from "./aaa.js";
console.log(num1);
console.log(height);

//3、導入export的function(這裡以aaa.js為例)
import { mul, Person } from "./aaa.js";
console.log(mul(30, 50));

const p = new Person();
p.run();

//4.導入的時後，名子不用大刮號 { }
import addr from "./aaa.js";
/* console.log(addr('你好阿')) */
addr('你好阿');

//5.統一全部導入
import * as aaa from './aaa.js'
console.log(aaa.flag);
console.log(aaa.height);