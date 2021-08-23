export default function BackButton({ $header, initialState, onClick }) {
  this.state = initialState;
  this.$target = document.createElement('button');
  this.$target.className = 'back-button';
  this.$target.innerHTML = `BACK`;
  $header.appendChild(this.$target);

  this.$target.addEventListener('click', onClick);

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!this.state.backButtonDisplay) {
      this.$target.style.display = 'none';
    } else {
      this.$target.style.display = 'inline-block';
    }
  };

  this.render();
}
