// 父类
class Phone {
  // 构造方法
  constructor(brand, color, price) {
    this.brand = brand;
    this.color = color;
    this.price = price;
  }
  // 对象方法
  call() {
    console.log("我可以打电话");
  }
  // 当对某个属性进行获取时，调用get方法；
  // 当对某个属性进行修改时，调用set方法
  get price() {
    console.log("价格属性被读取了");
    return "5999";
  }
  set price(newValue) {
    this.price = newValue;
    console.log("价格属性被修改了");
  }
}

// 子类
class SmartPhone extends Phone {
  constructor(brand, color, price, screen, pixel) {
    // 父类有的直接继承
    super(brand, color, price);
    this.screen = screen;
    this.pixel = pixel;
  }
  // 子类方法
  photo() {
    console.log("我可以拍照");
  }
  // 方法重写
  call() {
    console.log("我可以视屏通话");
  }
  // 静态方法
  static run() {
    console.log("我可以运行程序");
  }
}

// 实例化对象
const Nokia = new Phone("诺基亚", "白色", 230);
const iPhone6s = new SmartPhone("苹果", "黑色", 5999, "4.7inch", "500w");

// 调用子类方法
iPhone6s.photo();
