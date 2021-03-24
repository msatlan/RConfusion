import React from 'react';
import { Header, Footer } from 'components';
import { Menu, Contact, DishDetail, About, Home } from 'components';
import { Switch, Route, Redirect, withRouter, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    postComment,
    fetchDishesAsync,
    fetchComments,
    fetchPromos,
    fetchLeaders,
    postFeedback,
} from 'redux/common/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// const mapStateToProps = (state) => {
//     return {
//         dishes: state.dishes,
//         comments: state.comments,
//         //promotions: state.promotions,
//         leaders: state.leaders,
//     };
// };

// const mapDispatchToProps = (dispatch) => ({
//     postComment: (dishId, rating, author, comment) =>
//         dispatch(postComment(dishId, rating, author, comment)),
//     fetchDishesAsync: () => {
//         dispatch(fetchDishesAsync());
//     },
//     resetFeedbackForm: () => {
//         dispatch(actions.reset('feedback'));
//     },
//     fetchComments: () => {
//         dispatch(fetchComments());
//     },
// fetchPromos: () => {
//     dispatch(fetchPromos());
// },
//     fetchLeaders: () => {
//         dispatch(fetchLeaders());
//     },
//     postFeedback: (feedback) => {
//         dispatch(postFeedback(feedback));
//     },
// });

function Main() {
    const location = useLocation();
    // componentDidMount() {
    //     this.props.fetchDishesAsync();
    //     this.props.fetchComments();
    //     //this.props.fetchPromos();
    //     this.props.fetchLeaders();
    // }

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
                <CSSTransition key={location.pathName} classNames={'page'} timeout={300}>
                    <Switch>
                        <Route path="/home" component={() => <Home />} />
                        <Route
                            exact
                            path="/menu"
                            component={() => <Menu dishes={this.props.dishes} />}
                        />
                        <Route path="/menu/:dishId" component={DishWithId} />
                        <Route
                            exact
                            path="/contactus"
                            component={() => (
                                <Contact
                                    resetFeedbackForm={this.props.resetFeedbackForm}
                                    postFeedback={this.props.postFeedback}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/aboutus"
                            component={() => <About leaders={this.props.leaders} />}
                        />
                        <Redirect to="home" />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            <Footer />
        </div>
    );
}

export default Main;
