export default function AlarmList({
  $main,
  initialState,
  onClickRemoveButton,
}) {
  this.state = initialState;

  this.$target = document.createElement('ul');
  this.$target.className = 'alarm-list';

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  this.$target.addEventListener('click', e => {
    if (e.target.closest('button')) {
      const { id } = e.target.closest('li').dataset;

      onClickRemoveButton(Number(id));
    }
  });

  this.render = () => {
    $main.innerHTML = '';
    $main.appendChild(this.$target);
    this.$target.innerHTML = `${this.state.alarms
      .map(
        ({ id, am, hours, minutes }) =>
          `<li clas=="alarm__item" data-id="${id}"><span>${
            am ? '오전' : '오후'
          } ${hours}시 ${minutes}분</span><button>삭제</button></li>`,
      )
      .join('')}`;
  };
}
