import EventEmitter from './EventEmitter';
import template from './template';

const gameElement = document.getElementById('game');
const events = new EventEmitter();

const render = (state) => {
  gameElement.innerHTML = template(state);
};

const onPlayerMove = (handler) => {
  events.subscribe('move', handler);
};

gameElement.addEventListener('click', (event) => {
  const cellKey = event.target.dataset['key'];
  if (cellKey) {
    events.emit('move', cellKey);
  }
});

export default {
  render,
  onPlayerMove,
};
