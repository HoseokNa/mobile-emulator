import Header from './header/Header.js';
import Home from './home/Home.js';

export default function MobileEmulator({ $app, initialState }) {
  this.state = initialState;

  this.header = new Header({ $app, initialState: {} });
  this.home = new Home({ $app, initialState: { appData: this.state.appData } });
}
