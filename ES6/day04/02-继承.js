//类 语法糖
// 声明一个类 使用class
class Animal {
  //构造器
  constructor(name) {
    this.name = name
  }
  // 实例方法
  sayName() {
    console.log(this.name);
  }
  // 静态方法 
  static sayMy() {
    console.log('Animal的静态方法');
  }
}

// 静态属性
Animal.test = 'hello'

// 使用继承
class Dog extends Animal{
  // 子类也有 构造器
  constructor(name, age){
    // 第一句一定要调用父构造器 super()
    // 因为父类需要一个name形参 所以我们把name传进去
    super(name) //相当于 把父类的 this.name = name 继承了过来
    // 然后再写子构造器里面的其他属性的设置 如果Dog继承了Animal 要实现属性继承 属性继承是在子构造函数里调用父构造函数 那么在类这里 就需要在子构造器里去调用父构造器 我们就要使用super()方法 意思就是调用父构造器的方法 并且调用父构造器的时候要把name传递过去 作为实参
    this.age = age
  }
  // 自己的实例方法
  sayAge(){
    console.log(this.age);
  }
  // 调用父类的实例方法
  sayHello(){
    // 在子类中如何调用父类的实例方法 super还有一个用处 调用父类的方法
    // super指向的是父类的实例对象
    // 调用父类中的sayName实例方法
    super.sayName()
  }

  // 自己的静态方法
  static sayDog(){
    console.log('Dog的静态方法');
    // 调用父类的静态方法 super 指向的就是父类本身
    super.sayMy() 
    // 总结一点 在子类里想要调用父类 就用super
  }
  
}

// 声明一个对象实例
let dog = new Dog('可乐', 1)
console.log(dog);
// 既然Dog继承了Animal 那么就继承了它的一切 包括 实例属性 实例方法 静态方法 静态属性 
// 访问Animal的实例方法
dog.sayName()

// 那我们看下静态方法和属性可不可以用
// 调用父类的静态方法
Dog.sayMy()

// 调用父类的静态属性
console.log(Dog.test);

// 调用dog的实例方法
dog.sayAge()
dog.sayHello()

// 调用Dog的静态方法
Dog.sayDog()

// class类继承的本质 子类对象继承父类对象 
console.log(Dog.__proto__ === Animal); //true
// 子类原型继承父类原型
console.log(Dog.prototype.__proto__ === Animal.prototype); //true

