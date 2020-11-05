import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Menu';
import DishDetail from './DishdetailComponent';
import { Dishes } from '../common/dishes';

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dishes: Dishes,
            selectedDish: null
        }
    }
    
    onDishSelect(dishId) {
        this.setState({
            selectedDish: dishId
        });
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
            <Menu 
                dishes={this.state.dishes}
                onClick={(dishId)=>this.onDishSelect(dishId)}
            />
            <DishDetail selectedDish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}/>
        </div>
        );
    }
}

export default Main;
