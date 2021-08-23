export default function Home({ $main, initialState, runApp }) {
  this.state = initialState;
  this.$target = $main;

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = `<ul>${this.state.appData.map(
      ({ name }) => `<li>${name}</li>`,
    )}</ul>`;
  };

  this.$target.addEventListener('click', ({ target: { innerText } }) =>
    runApp(innerText),
  );

  this.render();
}
