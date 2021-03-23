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
import { MyComponentTemplate } from 'components/core/myComponent';

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
                {item && (
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
                )}
            </FadeTransform>
        );
    }
}

function Home(props) {
    const {
        promotion,
        promotionsLoading,
        promotionsErrMessage,
    } = HomeViewStore();
    debugger;
    return (
        <div className="container">
            <div className="row align-items-start">
                {/* <div className="col 12 col-md m-1">
                    <RenderCard
                        item={dish}
                        isLoading={dishesLoading}
                        err={dishesErrMess}
                    />
                </div> */}
                <div className="col 12 col-md m-1">
                    <RenderCard
                        item={promotion}
                        isLoading={promotionsLoading}
                        err={promotionsErrMessage}
                    />
                </div>
                {/* <div className="col 12 col-md m-1">
                    <RenderCard
                        item={leader}
                        isLoading={leadersLoading}
                        err={leadersErrMess}
                    />
                </div> */}
            </div>
        </div>
    );
}

export default Home;
