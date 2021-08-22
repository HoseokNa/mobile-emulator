import MobileEmulator from './component/MoblieEmulator.js';

const $app = document.getElementById('app');

new MobileEmulator({
  $app,
  initialState: {
    appData: [{ name: '알람' }, { name: '메모' }, { name: '사진' }],
  },
});
