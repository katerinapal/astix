import Game from './game/game';
import Drawer from './game/drawer';

const drawer = new Drawer(),
      game = new Game(drawer);

game.start();
