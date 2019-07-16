import React, { Component } from 'react';
import Ninjas from './ninjas';
import AddNinja from './AddNinja'
import './style.css'


class App extends Component {

  state = {
    ninjas: [
      // { name: "Mietek", age: '99', belt: 'black', key: 1 },
      // { name: "Kazik", age: '98', belt: 'red', key: 2 },
      // { name: "Bolek", age: '101', belt: 'green', key: 3 },
      // { name: "Adam", age: '19', belt: 'green', key: 4 },
      // { name: "Ola", age: '15', belt: 'green', key: 5 },
      // { name: "Kasia", age: '10', belt: 'green', key: 6 }
    ]
  }

  deleteNinja = (key) => {
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.key !== key
    })

    this.setState({
      ninjas: ninjas
    })

  }

  addNinja = (ninja) => {
    ninja.key = Math.random()
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })

  }
  componentDidMount(){
    console.log('component mounted')
  }

  componentDidUpdate(prevProps, prevState){
    console.log('component did update')
    console.log(prevProps, prevState)

  }
  render() {
    return (
      <div>
        <h1>My first React App</h1>
        <p>Welcome :-)</p>
        <AddNinja addNinja={this.addNinja} />
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        

      </div>
    );
  }
}

export default App;
