// 定义食物food
class Food{
  // 定义一个属性表示食物对应的元素
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById('food' )!;
  }
  get X() {
    return this.element.offsetLeft;
  }
  get Y() {
    return this.element.offsetTop;
  }
  // 改变食物的位置
  change(){
    // 在范围内，且是10的倍数
    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;

    this.element.style.top = top + 'px';
    this.element.style.left = left + 'px';
  }
}

const food = new Food;
food.change();

export default Food
