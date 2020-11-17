import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Label,
    Col,
    Row,
} from 'reactstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Loading } from 'components';
import { baseUrl } from 'common';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length > len;

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
        };

        this.toggleIsModalOpen = this.toggleIsModalOpen.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    toggleIsModalOpen() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }

    onFormSubmit(values) {
        this.props.postComment(
            this.props.dishId,
            values.rating,
            values.name,
            values.comment
        );
        this.toggleIsModalOpen();
    }

    render() {
        return (
            <React.Fragment>
                <Button
                    outline
                    color="secondary"
                    onClick={this.toggleIsModalOpen}
                >
                    <i className="fa fa-pencil" aria-hidden="true">
                        <strong> Submit Comment</strong>
                    </i>
                </Button>
                <Modal
                    isOpen={this.state.isModalOpen}
                    toggle={this.toggleIsModalOpen}
                >
                    <ModalHeader toggle={this.toggleIsModalOpen}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm
                            onSubmit={(values) => this.onFormSubmit(values)}
                        >
                            <Row>
                                <Col>
                                    <Label htmlFor="rating">
                                        <strong>Rating</strong>
                                    </Label>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Control.select
                                        model=".rating"
                                        name="rating"
                                        id="rating"
                                        className="form-control"
                                        type="number"
                                        defaultValue={'1'}
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Label htmlFor="yourname">
                                        <strong>Your Name</strong>
                                    </Label>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Control.text
                                        model=".name"
                                        name="name"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15),
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength:
                                                'Must be 3 characters or more',
                                            maxLength:
                                                'Must be 15 chacters or less',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Control.textarea
                                        model=".comment"
                                        name="comment"
                                        placeholder="Comment"
                                        className="form-control"
                                        rows="6"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <div>
                <FadeTransform
                    in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)',
                    }}
                >
                    <Card>
                        <CardImg
                            width="100%"
                            src={baseUrl + dish.image}
                            alt={dish.name}
                        />
                        <CardBody>
                            <CardTitle heading="true">{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </FadeTransform>
            </div>
        );
    } else {
        return <div></div>;
    }
}

function RenderComments({ comments, postComment, dishId }) {
    if (comments != null) {
        return (
            <div>
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        <Stagger in>
                            {comments.map((c) => {
                                return (
                                    <Fade in>
                                        <li>
                                            {c.comment}
                                            -- {c.author},{' '}
                                            {moment(c.date).format(
                                                'MMMM DD, YYYY'
                                            )}
                                        </li>
                                    </Fade>
                                );
                            })}
                        </Stagger>
                    </ul>
                </div>
                <div>
                    <CommentForm dishId={dishId} postComment={postComment} />
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <CommentForm />
            </div>
        );
    }
}

const DishDetail = (props) => {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    } else if (props.err) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.err}</h4>
                </div>
            </div>
        );
    } else if (props.selectedDish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {props.selectedDish.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.selectedDish.name}</h3>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.selectedDish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments
                            comments={props.comments}
                            postComment={props.postComment}
                            dishId={props.selectedDish.id}
                        />
                    </div>
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default DishDetail;
