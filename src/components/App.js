import React from 'react';

import Profile from './Profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: '', isProfileRendered: false };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      id: e.target.value,
    })
  }

  showProfile = () => {
    this.setState({
      ...this.state,
      isProfileRendered: !this.state.isProfileRendered,
    })
  }

  render() {
    return (
      <div className="app">
        <form>
          <label>Enter id (between 1 and 10): </label>
          <input value={this.state.id} onChange={this.handleChange} />
        </form>
        {this.state.isProfileRendered && (<Profile id={this.state.id} />)}
        <button onClick={this.showProfile}>Show/hide profile</button>
      </div>
    );
  }
}

export default App;
