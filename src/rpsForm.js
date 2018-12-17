import React from 'react';

class RpsForm extends React.Component {

compareToComp = (choice, computerChoice) => {
    if (choice === computerChoice) {
      return 'Its a tie'
    } else {
      return 'You win'
    }
}

  render(choice) {
    return (
      <form onSubmit={this.compareToComp}>
        <input
        name='choice'
        value={choice}
        required
        placeholder='Rock Paper or Scissors'
        onChange={this.compareToComp}
      />
      </form>
    )
  }
}

export default RpsForm;
