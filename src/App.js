import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menu';
import { Dishes } from './common/dishes';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dishes: Dishes
    }
  } 

  render(){
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        {/* when state is passed to child component, in child component it's used as props */}
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
