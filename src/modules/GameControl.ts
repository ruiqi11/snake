import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';


// 游戏控制器，控制其他的所有类
class GameControl{
  // 定义三个类
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  direction: String = 'Right';
  // 记录游戏是否结束
  isLive = true;

  constructor(){
    this.snake = new Snake;
    this.food = new Food;
    this.scorePanel = new ScorePanel;

    // 调用游戏初始化
    this.init();
  }

  // 游戏初始化
  init(){
    // 绑定键盘按下事件
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    this.run();
  }
  // 根据按下键改变方向
  keydownHandler(event: KeyboardEvent){
    this.direction = event.key;
  }

  // 运动
  run(){
    let X = this.snake.X;
    let Y = this.snake.Y;

    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;

    }

    this.checkEat(X, Y);

    try{
      this.snake.X = X;
      this.snake.Y = Y;
    }catch (e){
      alert(e.message)
      this.isLive = false;
    }

    this.isLive && setTimeout(this.run.bind(this), 300-(this.scorePanel.level-1)*30);
  }

    // 检测是否吃到食物函数
    checkEat(X: number, Y:number){
      if(X === this.food.X && Y === this.food.Y){
        this.food.change();
        this.scorePanel.addSore();
        this.snake.addBody();
      }
    }
}

export default GameControl
