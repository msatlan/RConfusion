import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPromos } from 'redux/common';

const HomeViewStore = () => {
    const promotions = useSelector((state) => state.promotions);
    //let promotionsLoading = promotions.promosLoading;
    //let promotion = promotions.filter((promotion) => promotion.featured)[0];
    //let promotionsErrMessage = promotions.err;
    //const [_promotions] = useState(promotions.promotions);

    const dispatch = useDispatch();

    // runs after every render
    // 1st parameter - function that gets called after render/rerender
    // 2nd parameter - dependency array - declare on what state or props change you want to trigger the effect
    // - a combination of componentDidMount and componentDidUpdate
    // if effect needs to be used only after the first render pass empty array - []
    // if effect needs to be used after every render - omit the 2nd param
    // if useEffect has a function in return statement that function will be called on unmount
    useEffect(() => {
        debugger;
        dispatch(fetchPromos());
    }, []);

    debugger;
    return {
        //promotionsLoading,
        promotions,
        //promotionsErrMessage,
    };
};

export default HomeViewStore;
