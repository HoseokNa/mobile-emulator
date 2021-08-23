export default function NewButton({ $header, initialState, onClick }) {
  this.state = initialState;
  this.$target = document.createElement('button');
  this.$target.className = 'new-button';
  this.$target.innerHTML = `NEW`;
  $header.appendChild(this.$target);

  this.$target.addEventListener('click', onClick);

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!this.state.newButtonDisplay) {
      this.$target.style.display = 'none';
    } else {
      this.$target.style.display = 'inline-block';
    }
  };

  this.render();
}
