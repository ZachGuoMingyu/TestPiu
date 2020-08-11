const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《iOS入门》',
        date: '2020-06',
        price: 80.00,
        count: 1
      },
      {
        id: 2,
        name: '《Python入门》',
        date: '2019-06',
        price: 120.00,
        count: 1
      },
      {
        id: 3,
        name: '《Vue入门》',
        date: '2020-04',
        price: 110.00,
        count: 1
      },
      {
        id: 4,
        name: '《前端基础》',
        date: '2018-06',
        price: 90.00,
        count: 1
      }
    ],
    // 书籍id
    id:'',
    // 书籍名称
    name:'',
    // 发布日期
    date:'',
    // 价格
    price:'',
    // 数量
    count:''
  },
  methods: {
    increment(index){
      // console.log('increment',index);
      this.books[index].count ++
    },
    decrement(index){
      // console.log('decrement',index);
      this.books[index].count --
    },
    removeHandle(index){
      // console.log(index);
      this.books.splice(index, 1)
    },
    // 添加图书
    addBook() {
      // 添加图书
      let book = {};
      book.id = this.id;
      book.name = this.name;
      book.date = this.date;
      // 这里注意 因为前面我们的价格加了过滤器 这里也要添加 否则会报错
      book.price = this.price | this.showPrice;
      book.count = this.count;
      this.books.push(book);
      // 清空表单
      this.id = '';
      this.name = '';
      this.date = '';
      this.price = '';
      this.count = '';
    }
  },
  computed: {
    totalPrice(){
      // 1.for循环
      // let totalPrice = 0
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice

      // reduce第一版 book是books中的每一个对象 不要忘记起始值为0
      // return this.books.reduce(function (totalValue, book) {
      //   return totalValue + book.price * book.count
      // },0)

      // reduce 箭头函数
      return this.books.reduce((totalValue, book) => {
        return totalValue + book.price * book.count
      },0)

      // 箭头函数简化版
      // return this.books.reduce((totalValue, book) =>totalValue + book.price * book.count, 0)
    }
  },
  // 过滤器
  filters: {
    showPrice(price){
      return '￥' + price.toFixed(2)
    }
  }
})