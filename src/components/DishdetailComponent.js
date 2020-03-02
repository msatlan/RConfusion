import React, {Component} from 'react';
import { Card, 
    CardImg, 
    CardText, 
    CardBody, 
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish){
        if (dish != null) {
            return (
                <div>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle heading>{dish.name}</CardTitle>
                            <CardText>
                                {dish.description}
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comments){
        if(comments != null) {
            const comm = comments.map(e => {
                return(
                    <div key={e.id}>
                        <div>
                            {e.comment}
                        </div>
                        <div>
                            -- {e.author}, {e.date}
                        </div>
                    </div>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    {comm}
                </div>
            )
        } else {
            return (
                <div></div>
            );
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.props.selectedDish &&
                            this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;