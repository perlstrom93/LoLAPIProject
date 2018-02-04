import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';

class Welcome extends React.Component {
  state = {name: 'React Test'};

  handleChange = (e) => {
    this.setState({name: e.target.value});
  }

  render() {
    const { handleChange, state: { name } } = this;

    return (
      <div className={styles.application}>
        <h1>Welcome</h1>
        <p>Hello {name}</p>
        <input type="text" onChange={handleChange} placeholder="Name" />
      </div>
    )
  }
}

ReactDOM.render(<Welcome/>, document.getElementById('app'));
