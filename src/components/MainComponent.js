import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Menu from "./Menu";
import Contact from "./ContactComponent";
import DishDetail from "./DishdetailComponent";
import { Dishes } from "../common/dishes";
import { Comments } from "../common/comments";
import { Leaders } from "../common/leaders";
import { Promotions } from "../common/promotions";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={
            this.state.promotions.filter((promotion) => promotion.featured)[0]
          }
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          selectedDish={
            this.state.dishes.filter(
              (d) => d.id === parseInt(match.params.dishId)
            )[0]
          }
          comments={this.state.comments.filter(
            (c) => c.dishId === parseInt(match.params.dishId)
          )}
        />
      );
    };

    return (
      <div>
        {/* when state is passed to child component, in child component it's used as props */}
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
