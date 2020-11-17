import React, { Component } from 'react';
import { Header, Footer } from 'components';
import { Menu, Contact, DishDetail, About, Home } from 'components';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    postComment,
    fetchDishes,
    fetchComments,
    fetchPromos,
    fetchLeaders,
    postFeedback,
} from 'redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders,
    };
};

const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) =>
        dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => {
        dispatch(fetchDishes());
    },
    resetFeedbackForm: () => {
        dispatch(actions.reset('feedback'));
    },
    fetchComments: () => {
        dispatch(fetchComments());
    },
    fetchPromos: () => {
        dispatch(fetchPromos());
    },
    fetchLeaders: () => {
        dispatch(fetchLeaders());
    },
    postFeedback: (feedback) => {
        dispatch(postFeedback(feedback));
    },
});

class Main extends Component {
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={
                        this.props.dishes.dishes.filter(
                            (dish) => dish.featured
                        )[0]
                    }
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.err}
                    promotion={
                        this.props.promotions.promotions.filter(
                            (promotion) => promotion.featured
                        )[0]
                    }
                    promosLoading={this.props.promotions.isLoading}
                    promosErrMess={this.props.promotions.err}
                    leader={
                        this.props.leaders.leaders.filter(
                            (leader) => leader.featured
                        )[0]
                    }
                    leadersLoading={this.props.leaders.isLoading}
                    leadersErrMess={this.props.leaders.err}
                />
            );
        };

        const DishWithId = ({ match }) => {
            return (
                <DishDetail
                    selectedDish={
                        this.props.dishes.dishes.filter(
                            (d) => d.id === parseInt(match.params.dishId)
                        )[0]
                    }
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.err}
                    comments={this.props.comments.comments.filter(
                        (c) => c.dishId === parseInt(match.params.dishId)
                    )}
                    commentsErrMess={this.props.comments.errMess}
                    postComment={this.props.postComment}
                />
            );
        };

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition
                        key={this.props.location.key}
                        classNames={'page'}
                        timeout={300}
                    >
                        <Switch>
                            <Route path="/home" component={HomePage} />
                            <Route
                                exact
                                path="/menu"
                                component={() => (
                                    <Menu dishes={this.props.dishes} />
                                )}
                            />
                            <Route
                                path="/menu/:dishId"
                                component={DishWithId}
                            />
                            <Route
                                exact
                                path="/contactus"
                                component={() => (
                                    <Contact
                                        resetFeedbackForm={
                                            this.props.resetFeedbackForm
                                        }
                                        postFeedback={this.props.postFeedback}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/aboutus"
                                component={() => (
                                    <About leaders={this.props.leaders} />
                                )}
                            />
                            <Redirect to="home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
