import React from 'react';

import Profile from './Profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: '' };
  }

  handleChange = (e) => {
    this.setState({
      id: e.target.value,
    })
  }

  render() {
    return (
      <div className="app">
        <form>
          <label>Enter user id: </label>
          <input value={this.state.id} onChange={this.handleChange} />
        </form>
        <Profile id={this.state.id} />
      </div>
    );
  }
}

export default App;
