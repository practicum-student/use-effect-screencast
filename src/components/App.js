import React from 'react';

import Profile from './Profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: '', isProfileVisible: false };
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
      isProfileVisible: !this.state.isProfileVisible,
    })
  }

  render() {
    return (
      <div className="app">
        <form>
          <label>Enter user id: </label>
          <input value={this.state.id} onChange={this.handleChange} />
        </form>
        {this.state.isProfileVisible && (<Profile id={this.state.id} />)}
        <button onClick={this.showProfile}>Show/hide profile</button>
      </div>
    );
  }
}

export default App;
