// 定义蛇
class Snake{
  // 蛇头元素
  head: HTMLElement;
  // 蛇体
  bodies: HTMLCollection;
  // 蛇容器
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }

  // 获取蛇头坐标
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }

  // 设置蛇头坐标
  set X(value: number){
    // 撞墙判断
    if (this.X === value){
      return
    }
    if(value < 0 || value > 290){
      throw new Error('蛇撞墙了')
    }

    // 防止掉头
    if((this.bodies[1] as HTMLElement).offsetLeft === value){
      if(value > this.X){
        value = this.X - 10;
      }else{
        value = this.X + 10;
      }
    }

    this.moveBody()
    this.head.style.left = value + 'px';
    this.checkHeadBody()
  }
  
  set Y(value: number){
    // 撞墙判断
    if (this.Y === value){
      return
    }
    if(value < 0 || value > 290){
      throw new Error('蛇撞墙了')
    }

    // 防止掉头
    if((this.bodies[1] as HTMLElement).offsetTop === value){
      if(value > this.Y){
        value = this.Y - 10;
      }else{
        value = this.Y + 10;
      }
    }

    this.moveBody()
    this.head.style.top = value + 'px';
    this.checkHeadBody()
  }

  // 增加身体长度
  addBody() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>');
  }

  // 移动身体
  moveBody(){
    for(let i = this.bodies.length - 1; i>0; i--){
      // 获取前边身体的位置
      let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

      // 将值设置到当前位置上
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';

    }
  }

  checkHeadBody(){
    for(let i = 1; i < this.bodies.length; i++){
      let bd = this.bodies[i] as HTMLElement;
      if( this.X === bd.offsetLeft && this.Y === bd.offsetTop){
        throw new Error('咬到自己了')
      }
    }
  }
}

export default Snake
