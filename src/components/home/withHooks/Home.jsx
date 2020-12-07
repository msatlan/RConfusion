import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
} from 'reactstrap';
import { Loading } from 'components';
import { baseUrl } from 'common';
import { FadeTransform } from 'react-animation-components';
import HomeViewStore from './HomeViewStore';

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
    const { isMessageRendered, onButtonClick } = HomeViewStore();

    const {
        dish,
        dishesLoading,
        dishesErrMess,
        promotion,
        promosLoading,
        promosErrMess,
        leader,
        leadersLoading,
        leadersErrMess,
    } = props;

    return (
        <div className="container">
            <div>{isMessageRendered && <div>Button clicked!!</div>}</div>
            <div className="row">
                <div className="col 12">
                    <Button color="primary" onClick={onButtonClick}>
                        Button
                    </Button>
                </div>
            </div>
            <div className="row align-items-start">
                <div className="col 12 col-md m-1">
                    <RenderCard
                        item={dish}
                        isLoading={dishesLoading}
                        err={dishesErrMess}
                    />
                </div>
                <div className="col 12 col-md m-1">
                    <RenderCard
                        item={promotion}
                        isLoading={promosLoading}
                        err={promosErrMess}
                    />
                </div>
                <div className="col 12 col-md m-1">
                    <RenderCard
                        item={leader}
                        isLoading={leadersLoading}
                        err={leadersErrMess}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
