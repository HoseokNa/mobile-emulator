export default function Home({ $app, initialState }) {
  this.state = initialState;

  this.$target = document.createElement('main');
  $app.appendChild(this.$target);

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
