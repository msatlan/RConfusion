import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
} from 'reactstrap';
import { Loading } from 'components';
import { baseUrl } from 'common';
import { FadeTransform } from 'react-animation-components';

function RenderCard({ item, isLoading, err }) {
    if (isLoading) {
        return <Loading />;
    } else if (err) {
        return <h4>{err}</h4>;
    } else {
        return (
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)',
                }}
            >
                <Card>
                    <CardImg
                        src={baseUrl + item.image}
                        alt={item.name}
                    ></CardImg>
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? (
                            <CardSubtitle>{item.designation}</CardSubtitle>
                        ) : null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
    }
}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col 12 col-md m-1">
                    <RenderCard
                        item={props.dish}
                        isLoading={props.dishesLoading}
                        err={props.dishesErrMess}
                    />
                </div>
                <div className="col 12 col-md m-1">
                    <RenderCard
                        item={props.promotion}
                        isLoading={props.promosLoading}
                        err={props.promosErrMess}
                    />
                </div>
                <div className="col 12 col-md m-1">
                    <RenderCard
                        item={props.leader}
                        isLoading={props.leadersLoading}
                        err={props.leadersErrMess}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
