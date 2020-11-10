import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem,
} from 'reactstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';
import CommentForm from './forms/CommentForm';

function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <div>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    } else {
        return <div></div>;
    }
}

function RenderComments({ comments }) {
    if (comments != null) {
        const comm = comments.map((e) => (
            <div key={e.id}>
                <ul className="list-unstyled">
                    <li>
                        {e.comment}
                        -- {e.author}, {moment(e.date).format('MMMM DD, YYYY')}
                    </li>
                </ul>
            </div>
        ));

        return (
            <div>
                <h4>Comments</h4>
                {comm}
                <CommentForm></CommentForm>
            </div>
        );
    } else {
        return (
            <div>
                <CommentForm></CommentForm>
            </div>
        );
    }
}

const DishDetail = (props) => {
    if (props.selectedDish != null) {
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
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default DishDetail;
