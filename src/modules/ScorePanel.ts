// 定义记分牌的类
class ScorePanel{
  score = 0;
  level = 1;

  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  // 设置最高等级
  maxLevel: number;
  // 进击跨度
  upScore: number;

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  // 设置加分方法
  addSore(){
    this.scoreEle.innerHTML = ++this.score + ''
    if(this.score % this.upScore === 0) {
      this.leveUp();
    }
  }


  // 提升等级的方法
  leveUp(){
    if(this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++ this.level + '';
    }
  }
}

export default ScorePanel
