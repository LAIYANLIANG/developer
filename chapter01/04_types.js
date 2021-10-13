//Object 表示一個js對像
/* let a: object;
a = {};
a = function () {

}; */
//{}用來指定對像中可以包含哪些屬性
//語法：{屬性名：屬性值,屬性名：屬性值}
//在屬性名後面加一個「?」，表示這個屬性是可選的
var f;
f = { name: '小小小' };
//[propName:string]:any  表示任意類型的屬性
//[propName:string]:string  表示任意純文字類型
var g;
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
var h;
h = ['hello', 'abc'];
/**
 * enum 枚舉
 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: 'eeeee',
    gender: Gender.Female
};
console.log(i.gender === Gender.Female);
