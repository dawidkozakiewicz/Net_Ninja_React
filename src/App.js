import React, { Component } from 'react';
import Ninjas from './ninjas';


class App extends Component {

  state = {
    ninjas: [
      { name: "Mietek", age: '99', belt: 'black', key: 1 },
      { name: "Kazik", age: '98', belt: 'red', key: 2 },
      { name: "Bolek", age: '101', belt: 'green', key: 3 },
      { name: "Adam", age: '19', belt: 'green', key: 3 },
      { name: "Ola", age: '15', belt: 'green', key: 3 },
      { name: "Kasia", age: '10', belt: 'green', key: 3 }
    ]
  }
  render() {
    return (
      <div>
        <h1>My first React App</h1>
        <p>Welcome :-)</p>
        <Ninjas ninjas={this.state.ninjas} />

      </div>
    );
  }
}

export default App;
