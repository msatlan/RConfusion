import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPromosAsync, fetchDishesAsync, fetchLeadersAsync } from 'redux/common';

const HomeViewStore = () => {
    const dispatch = useDispatch();

    const promotions = useSelector((state) => state.promotions.promotions);
    const promotionsLoading = useSelector((state) => state.promotions.isLoading);
    const promotionsErrMessage = useSelector((state) => state.promotions.err);

    const dishes = useSelector((state) => state.dishes.dishes);
    const dishesLoading = useSelector((state) => state.dishes.isLoading);
    const dishesErrMessage = useSelector((state) => state.dishes.err);

    const leaders = useSelector((state) => state.leaders.leaders);
    const leadersLoading = useSelector((state) => state.leaders.isLoading);
    const leadersErrMessage = useSelector((state) => state.leaders.err);

    const [promotion, setPromotion] = useState({});
    const [dish, setDish] = useState({});
    const [leader, setLeader] = useState({});

    // runs after every render
    // 1st parameter - function that gets called after render/rerender
    // 2nd parameter - dependency array - declare on what state or props change you want to trigger the effect
    // - a combination of componentDidMount and componentDidUpdate
    // if effect needs to be used only after the first render pass empty array - []
    // if effect needs to be used after every render - omit the 2nd param
    // if useEffect has a function in return statement that function will be called on unmount
    useEffect(() => {
        dispatch(fetchPromosAsync());
        dispatch(fetchDishesAsync());
        dispatch(fetchLeadersAsync());
    }, []);

    useEffect(() => {
        if (dishes && dishes.length > 0) {
            setDish(() => {
                return dishes.filter((dish) => dish.featured)[0];
            });
        }

        if (promotions && promotions.length > 0) {
            setPromotion(() => {
                return promotions.filter((promotion) => promotion.featured)[0];
            });
        }

        if (leaders && leaders.length > 0) {
            setLeader(() => {
                return leaders.filter((leader) => leader.featured)[0];
            });
        }
    }, [dishes, promotions, leaders]);

    return {
        promotionsLoading,
        promotion,
        promotionsErrMessage,
        dish,
        dishesLoading,
        dishesErrMessage,
        leader,
        leadersLoading,
        leadersErrMessage,
    };
};

export default HomeViewStore;
