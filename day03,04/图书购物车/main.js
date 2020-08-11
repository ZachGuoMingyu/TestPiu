const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《java入门》',
                date: '2020-02',
                price: 190.00,
                count: 1
            },
            {
                id: 2,
                name: '《Vue入门》',
                date: '2019-04',
                price: 100.00,
                count: 1
            },
            {
                id: 3,
                name: '《C入门》',
                date: '2018-02',
                price: 110.00,
                count: 1
            },
            {
                id: 4,
                name: '《ES6入门》',
                date: '2010-02',
                price: 150.00,
                count: 1
            }
        ],
        // 编号
        id: '',
        // 书籍名称
        name: '',
        // 发布日期
        date: '',
        // 价格
        price: '',
        // 数量
        count: '',
        word: ''
    },
    methods: {
        // 数量增加
        increment(index) {
            this.books[index].count++
        },
        // 书籍过多，可以自行输入
        insertnum(index){
            this.word = prompt("请输入购买书籍的数量","");
            if (this.word) {
                this.books[index].count = this.word;
            } else {
                this.books[index].count=this.books[index].count-1;
            }
        },
        // 数量的减少
        decrement(index) {
            this.books[index].count--
            // let res = this.books[index].count--
            // if(res>0){
            //     this.books[index].count--
            // }else{
            //     alert('图书数量不可为负')
            // }
        },
        // 数量的移除
        removeHandle(index) {
            this.books.splice(index, 1)
        },
        // 添加图书
        addBook() {
            let book = {}
            book.id = this.id
            book.name = "《"+this.name+"》"
            book.date = this.date
            book.price = this.price | this.showPrice
            book.count = this.count
            // console.log(book);
            // 将book对象添加到数组中
            this.books.push(book)
            // 清空表单
            this.id = ''
            this.name = ''
            this.date = ''
            this.price = ''
            this.count = ''
        }

    },
    computed: {
        totalPrice() {
            let totalPrice = 0
            // 1.for循环
            for (let i = 0; i < this.books.length; i++) {
                totalPrice += this.books[i].price * this.books[i].count
            }
            return totalPrice
            // reduce第一种用法
            // totalValue 初始值
            // book 当前元素
            // 0 传递给函数的初始值
            // return this.books.reduce(function (totalValue, book) {
            //   return totalValue + book.price * book.count
            // },0)

            // reduce 第一次简化
            // return this.books.reduce((totalValue, book) => {
            //   return totalValue + book.price * book.count
            // }, 0)

            // reduce 终极简化
            // return this.books.reduce((totalValue, book) => totalValue + book.price * book.count
            // ,0)
        }
    },
    // 过滤器
    filters: {
        showPrice(price) {
            // toFixed 方法可把 Number 四舍五入为指定小数位数的数字 0~20
            return '￥' + price.toFixed(2)
        }
    }


})