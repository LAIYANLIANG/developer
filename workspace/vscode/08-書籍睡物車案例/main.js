const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '算法導論',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: 'UNIX編程藝術',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '編程珠機',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '代碼大全',
                date: '2006-3',
                price: 128.00,
                count: 1
            }
        ]
    },
    methods: {
        /*         getFinalPrice(price) {
                    return '$' + price.toFixed(2);
                } */
        increment(index) {
            console.log(index);
            this.books[index].count++;
        },
        decrement(index) {
            console.log(index);
            this.books[index].count--;
        },
        removeHandle(index) {
            this.books.splice(index, 1);
        }
    },
    //過濾器通常是一個函數，所以要宣告
    filters: {
        showPrice(price) {
            return '$' + price.toFixed(2);
        }
    },
    computed: {
        //計算總價
        totalPrice() {
            //1.普通的for循環
            /*  let totalPrice=0
              for (let i = 0; i < this.books.length; i++) {
                  totalPrice += this.books[i].count * this.books[i].price
              }
              return totalPrice */

            //2.for(let i in this.books)
            /* let totalPrice = 0
            for (let i in this.books) {
                totalPrice += this.books[i].count * this.books[i].price
            }
            return totalPrice; */

            //3.for(let i for this.books)
            /* let totalPrice = 0
            for (let item of this.books) {
                totalPrice += item.price * item.count
            } 
            return totalPrice; */

            //4.reduce

        }
    }

})

//編程範式：命令式編程/聲明式編程
//函數式編程：面向對向編程(第一公民:對象)/函數式編程(第一公民：函數)
//filter/map/reduce
//filter中的回調函數有一個要求：必需返回一個boolean值