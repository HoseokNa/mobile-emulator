import MobileEmulator from './component/MoblieEmulator.js';
import { APP_NAME } from './utils/constants.js';

const $app = document.getElementById('app');
const dummy = {
  appData: [
    { name: APP_NAME.ALARM },
    { name: APP_NAME.MEMO },
    { name: APP_NAME.PICTURE },
  ],
  alarms: [
    { id: 1, am: false, hours: 5, minutes: 0 },
    { id: 2, am: false, hours: 6, minutes: 10 },
    { id: 3, am: true, hours: 0, minutes: 0 },
  ],
};

new MobileEmulator({
  $app,
  initialState: {
    appData: dummy.appData,
    alarms: dummy.alarms,
  },
});
