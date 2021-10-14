//https://www.bilibili.com/video/BV1Xy4y1v7S2?p=5
//Object 表示一個js對像
/* let a: object;
a = {};
a = function () {

}; */

//{}用來指定對像中可以包含哪些屬性
//語法：{屬性名：屬性值,屬性名：屬性值}
//在屬性名後面加一個「?」，表示這個屬性是可選的
let f: { name: string, age?: number };
f = { name: '小小小' };

//[propName:string]:any  表示任意類型的屬性
//[propName:string]:string  表示任意純文字類型
let g: { name: string, [propName: string]: any };
g = { name: 'eeee' };


/**
 * 數組的類型聲明：
 *     類型[]
 *     Array<類型>
 * 
 */
//設置函數結構的類型聲明：
//語法：(形參:類型,形參:類別...)=>返回值
/* let h: (a: number, b: number) => number;
h=function(1,2):number{
return 10;
} */

//string[]表示字符串類組
//let e: string[];
//e = ['a', 'b', 'c'];
//number[]表示數值數值
//let f: number[];

//let g: Array<number>;
//g = [1, 2, 3];

/**
 * 元組，元組就是固定長度的數組
 * 語法：[類型,類型,類型]
 */
let h: [string, string];
h = ['hello', 'abc']

/**
 * enum 枚舉
 */

enum Gender {
    Male = 0,
    Female = 1
}

let i: { name: string, gender: Gender };
i = {
    name: 'eeeee',
    gender: Gender.Female
}
console.log(i.gender === Gender.Female);

//「&」 表示同時
let j: { name: string } & { age: number };
j = { age: 2, name: 'zzz' }

//類型的別名
//type myType = string;
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
let m: myType;

k = 2;