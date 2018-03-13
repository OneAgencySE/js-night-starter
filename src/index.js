import './index.css';
import game from './lib/game';

const state = {
  status: 'Next player: X',
  board: Array(9).fill(null),
  xIsNext: true,
};
game.render(state);
game.onPlayerMove(cellKey => {
  state.board[cellKey] = state.xIsNext ? 'X' : 'O';
  state.xIsNext = !state.xIsNext;
  game.render(state);
});
