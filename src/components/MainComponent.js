import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Menu from "./Menu";
import Contact from "./ContactComponent";
import DishDetail from "./DishdetailComponent";
import { Dishes } from "../common/dishes";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: Dishes,
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
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
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
