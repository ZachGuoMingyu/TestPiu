//新建vue实例
const app = new Vue({
    el:"#app",
    data: {
        books:[
            {
                id:1,
                name: '《IOS入门》',
                date: '2020-03',
                price: 90.20,
                count: 1
            },
            {
                id: 2,
                name: '《Python入门》',
                date: '2020-02',
                price: 60.20,
                count: 8
            },
            {
                id: 3,
                name: '《JAvA入门》',
                date: '2019-03',
                price: 190.20,
                count: 10
            },
            {
                id: 4,
                name: '《Vue入门》',
                date: '2017-06',
                price: 96.20,
                count: 15
            },
        ],
        //编号
        id:'',
        //书籍名称
        name:'',
        //发布日期
        date: '',
        //价格
        price: '',
        //数量
        count: '',
    },
    methods: {
        // 数量增加操作
        increment(index){
            //  console.log("add",index);
            //找到当前点击的这一行，实现点击一行进行增加删除
            this.books[index].count++;
        },
        //数量移除操作
        decrement(index){
            // console.log("sub");
            this.books[index].count--;
        },
        // 移除操作
        remove(index){
            this.books.splice(index, 1);
            // console.log(index);
        },
        // 添加图书
        addBook(){
            let book = {
                // id: this.id
            }
            book.id = this.id;
            book.name = this.name;
            book.date = this.date;
            book.price = this.price | this.showPrice;
            book.count = this.count;
            console.log(book);

            //将book对象添加到数组中
            this.books.push(book);    
            //清空表单
            this.id="",
            this.name="",
            this.date="",
            this.price="",
            this.count=""
        }


    },
    computed: {
        // 总价
        totalPrice(){
            //方法一：for循环
            // let totalPrice =0
            // for(let i =0;i<this.books.length;i++){
            //     totalPrice +=this.books[i].price * this.books[i].count
            // }
            // return totalPrice

            //方法二：reduce方法---高阶函数
            //totalValue：初始值(累加的过程)
            //book---currentVale:当前元素
            //0：传递给函数的初始值
            // return this.books.reduce(function (totalValue,book) {
            //     return totalValue + book.price * book.count;
            // },0)
            
            //reduce第一次简化
            return this.books.reduce( (totalValue,book) => {
                return totalValue + book.price * book.count;
            },0)

            //rerduce终极简化
            // return this.books.reduce( (totalValue,book) => 
            //      totalValue + book.price * book.count,0)
        }
    },
    // 过滤器
    filters:{
        showPrice(price){
            //toFixed 把Number 四舍五入
            return "￥" + price.toFixed(2);

        }
    }

})