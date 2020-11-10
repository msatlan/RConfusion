import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Label,
    Col,
    Row,
} from 'reactstrap';
import { Control, Errors, LocalForm } from 'react-redux-form';

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
        console.log('Form submitted - state' + JSON.stringify(values));
        alert('Form submitted - state' + JSON.stringify(values));
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
                                                'Must be greater than 2 characters',
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

export default CommentForm;
