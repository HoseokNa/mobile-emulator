import { APP_NAME } from '../utils/constants.js';
import AlarmList from './alarm/AlarmList.js';
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
    runApp: appName => {
      switch (appName) {
        case APP_NAME.ALARM:
          {
            this.alarmList.render();
          }
          break;
        case APP_NAME.MEMO:
          {
            console.log('메모 실행');
          }
          break;
        case APP_NAME.PICTURE:
          {
            console.log('사진 실행');
          }
          break;
      }
    },
  });
  this.alarmList = new AlarmList({
    $main: this.$main,
    initialState: { alarms: this.state.alarms },
    onClickRemoveButton: id => {
      const nextAlarms = this.state.alarms.filter(alarm => alarm.id !== id);
      console.log(nextAlarms);
      const nextState = { ...this.state, alarms: nextAlarms };

      this.setState(nextState);
    },
  });

  this.setState = nextState => {
    this.state = nextState;

    this.alarmList.setState({ alarms: nextState.alarms });
  };
}
