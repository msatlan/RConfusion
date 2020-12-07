import React, { useState } from 'react';

const HomeViewStore = () => {
    const [isMessageRendered, setIsMessageRendered] = useState(false);

    const onButtonClick = () => {
        setIsMessageRendered(!isMessageRendered);
    };

    return { isMessageRendered, onButtonClick };
};

export default HomeViewStore;
