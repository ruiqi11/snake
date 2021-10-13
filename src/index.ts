import './style/index.less';

// import Food from './modules/Food'
import ScorePanel from './modules/ScorePanel'
import GameControl from './modules/GameControl';


const scorePanel = new ScorePanel;
scorePanel.addSore();

new GameControl();
