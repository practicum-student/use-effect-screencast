import React from 'react';

import Profile from './Profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: 1 };
  }

  handleChange = (e) => {
    this.setState({
      id: e.target.value,
    })
  }

  handleChangeUser = (e) => {
    e.preventDefault();
    this.setState({
      id: this.state.id
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleChangeUser}>
          <input value={this.state.id} onChange={this.handleChange} />
        </form>
        <Profile id={this.state.id} />
      </>
    );
  }
}

export default App;
