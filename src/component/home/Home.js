export default function Home({ $main, initialState }) {
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

  this.render();
}
