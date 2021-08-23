import MobileEmulator from './component/MoblieEmulator.js';
import { APP_NAME } from './utils/constants.js';

const $app = document.getElementById('app');

new MobileEmulator({
  $app,
  initialState: {
    appData: [
      { name: APP_NAME.ALARM },
      { name: APP_NAME.MEMO },
      { name: APP_NAME.PICTURE },
    ],
  },
});
