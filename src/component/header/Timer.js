import { getCurrentTime } from '../../utils/util.js';

export default function Timer({ $header }) {
  this.state = {};

  this.$target = document.createElement('div');
  $header.appendChild(this.$target);

  this.render = () => {
    this.$target.innerHTML = `${this.state.time}`;
  };

  setInterval(() => {
    this.state.time = getCurrentTime();
    this.render();
  }, 1000);
}
