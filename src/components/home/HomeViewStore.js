import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPromos } from 'redux/common';

const HomeViewStore = () => {
    const dispatch = useDispatch();

    const promotions = useSelector((state) => state.promotions.promotions);
    const promotionsLoading = useSelector((state) => state.promotions.isLoading);
    const promotionsErrMessage = useSelector((state) => state.promotions.err);

    const [promotion, setPromotion] = useState({});
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

    useEffect(() => {
        debugger;
        if (promotions && promotions.length > 0) {
            setPromotion(() => {
                debugger;
                return promotions.filter((promotion) => promotion.featured)[0];
            });
        }
    }, [promotions]);

    return {
        promotionsLoading,
        promotion,
        promotionsErrMessage,
    };
};

export default HomeViewStore;
