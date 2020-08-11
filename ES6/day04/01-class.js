//类 语法糖
// 声明一个类 使用class
class Animal{
  // 默认有一个构造器 如果没有写，会默认提供
  constructor(name){
    // this 指向的就是对象实例
    // 构造器里的属性是实例属性
    this.name = name
  }//这里不用加逗号 因为这是一个类 不是对象
  // 如果想要有一些方法供实例去调用 可以提供一些实例方法
  // 实例方法 在构造函数的原型中 所以实例可以调用sayName方法
  sayName(){
    // this 指向的是调用者
    console.log(this.name);
  }
  // 静态方法 只能有类本身调用 实例不能调用
  // 之前我们用到过好多方法 比如Array.from() Array.of() Object.is() 这些方法都是由构造函数直接调用的 所以这些方法是构造函数的静态方法 只能由构造函数本身调用
  // 类的静态方法使用static关键字修饰
  static sayMy(){
    console.log('Animal');
  }
}

// 静态属性 只能有类本身访问 实例不能访问 定义在类的外面
Animal.staticAttr = 'AnimalStaticAttr'


// 使用类去创建对象实例
let animal = new Animal('可乐')
console.log(animal);
// 调用实例方法
animal.sayName()
// animal.sayMy() //错误的 静态方法只能有类本身调用
// 调用静态方法
Animal.sayMy()

// 访问静态属性
console.log(Animal.staticAttr);







