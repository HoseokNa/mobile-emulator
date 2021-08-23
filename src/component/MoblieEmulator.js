import Header from './header/Header.js';
import Home from './home/Home.js';

export default function MobileEmulator({ $app, initialState }) {
  this.state = initialState;

  this.header = new Header({ $app, initialState: {} });

  this.$main = document.createElement('main');
  $app.appendChild(this.$main);

  this.home = new Home({
    $main: this.$main,
    initialState: { appData: this.state.appData },
  });
}
