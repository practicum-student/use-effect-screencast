import React from 'react';

// function Profile(props) {
//   const [name, setName] = React.useState('');
//   const [email, setEmail] = React.useState('');  

//   return (
//     <div>
//       <h2>{`Name: ${name || ''}`}</h2>
//       <p>{`Email: ${email || ''}`}</p>
//     </div>
//   );
// }

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '' };
  }

  fetchUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          name: data.name,
          email: data.email,
        })
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.fetchUser(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {  
      this.fetchUser(this.props.id);
    }
  }

  componentWillUnmount() {
    alert('Bye!');
  }

  render() {
    return (
      <div>
        <h2>{`Name: ${this.state.name || ''}`}</h2>
        <p>{`Email: ${this.state.email || ''}`}</p>
      </div>
    );
  }
}

// Refactored Profile Component
//
// function Profile(props) {

//   const [name, setName] = React.useState('');
//   const [email, setEmail] = React.useState('');
 
//   React.useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${props.id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setName(data.name);
//         setEmail(data.email);
//       })
//   });

//   return (
//     <div>
//       <h2>{`Name: ${name}`}</h2>
//       <p>{`Email: ${email}`}</p>
//     </div>
//   );
// }

export default Profile;