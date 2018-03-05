import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '010304', name: 'Ale', age: 35 },
      { id: '010305', name: 'Richie', age: 34 }
    ],
    showPerson: false
  };

  toogleHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson
    });
  }

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex( person => person.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = e.target.value;
    const clone = [...this.state.persons];
    clone[personIndex] = person;
    this.setState({ persons: clone });
  }

  deletePersonHandler = (indice) => {
    const clone = [...this.state.persons];
    clone.splice(indice, 1);
    this.setState({
      persons: clone
    });
  }

  render() {
    const style = {
      backgroundColor: 'whitesmoke'
    };
    const btnStyle = {
      backgroundColor: 'yellowgreen',
      font: 'inherit',
      border: '1px solid white',
      padding: '8px',
      cursor: 'pointer',
      outline: 'none',
      borderRadius: '5px',
    }

    let persons = null;

    if ( this.state.showPerson ) {
      btnStyle.backgroundColor = 'crimson';
      persons = (
        <div className="personContainer">
          { this.state.persons.map((person, index) => {
            return <Person
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    click={() => this.deletePersonHandler(index)}
                    change={(event) => this.nameChangedHandler(event, person.id)} >
                    Hello
                  </Person>
            })
          }
        </div>
      )
    }

    const clasess = [];
    if (this.state.persons.length <= 2) {
      clasess.push('red');
    }
    if (this.state.persons.length <= 1) {
      clasess.push('bold');
    }
    let btnDisable = false;
    if (this.state.persons.length === 0) {
      btnStyle.backgroundColor = 'lightgray';
      btnStyle.cursor = 'auto';
      btnDisable = true;
    }

    return (
      <div className="App" style={style}>
        <h1>React component!</ h1>
        <p className={clasess.join(' ')}>Prueba</p>
        <button disabled={btnDisable} style={btnStyle} onClick={this.toogleHandler}>Toogle persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
