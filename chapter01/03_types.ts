//也可以直接使用字面量進行類型聲明

let a: 10;
a = 10;

//可以使用 「|」 來連接多個類型!!讓他限制值的屬性!!!(又稱連合類型!!)
let b: "male" | "false";
b = "false";
b = "male";
//b="hello"  //error

let c: boolean | string;
c = false;
c = "abc"
//c=123 //error


//any表示的是任意類型，一個變量設置類型為any後，想當於變量關閉了ts的類型檢測，會變的跟js一樣…這個有宣告的，又稱顯示
//使用ts時，不建議使用any類型…
let d: any;//如果直接寫：let d; 這種不指定類型也可以，財ts解析器會自動判斷變量的類型為any(隱式的any...這種就比隱示的還難找…)
d = 10;
d = 'hello';
d = true;

//unknown表示未知類型的值
let e: unknown;
e = 10;
e = "hello";
e = true;

let s: string
//d的類型是any，它可以賦值給任意變量
//s=d;
e = 'hello';
//unknown是不可以賦值給其他類型的!!!
//unknown類型的變量，不能直接賦值給其他變量!!!
//s = e; //這個會error!!!

//除非有自己多做一個類型判斷：
//判斷方法1：typeof
if (typeof e === 'string') {
    s = e;
}
//判斷方法2：類型斷  ，可以用來告訴解析器變量的實際類型
/**
 * 語法：
 * 變量as類型
 * <類型>變量
 * 
 */
s = e as string;
s=<string>e;