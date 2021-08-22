import Timer from './Timer.js';

export default function Header({ $app, initialState }) {
  this.state = initialState;

  this.$header = document.createElement('header');
  $app.appendChild(this.$header);

  this.timer = new Timer({ $header: this.$header });
}
