import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Menu from "./Menu";
import DishDetail from "./DishdetailComponent";
import { Dishes } from "../common/dishes";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: Dishes,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({
      selectedDish: dishId,
    });
  }

  render() {
    return (
      <div>
        {/* when state is passed to child component, in child component it's used as props */}
        <Header />
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <DishDetail
          selectedDish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
