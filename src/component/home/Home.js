export default function Home({ $main, initialState, runApp }) {
  this.state = initialState;

  this.$target = document.createElement('ul');
  this.$target.className = 'app-list';

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $main.innerHTML = '';
    $main.appendChild(this.$target);

    this.$target.innerHTML = `${this.state.appData.map(
      ({ name }) => `<li class="app-lis__item">${name}</li>`,
    )}`;
  };

  this.$target.addEventListener('click', ({ target: { innerText } }) =>
    runApp(innerText),
  );

  this.render();
}
