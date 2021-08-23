import BackButton from './BackButton.js';
import Timer from './Timer.js';

export default function Header({ $app, initialState, backHome }) {
  this.state = initialState;

  this.$header = document.createElement('header');
  $app.appendChild(this.$header);

  this.backButton = new BackButton({
    $header: this.$header,
    initialState: { backButtonDisplay: this.state.backButtonDisplay },
    onClick: backHome,
  });
  this.timer = new Timer({ $header: this.$header });

  this.setState = nextState => {
    this.state = nextState;

    this.backButton.setState({
      backButtonDisplay: this.state.backButtonDisplay,
    });
  };
}
