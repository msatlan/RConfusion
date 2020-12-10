import React, { useEffect, useState } from 'react';

const HomeViewStore = () => {
    const [isMessageRendered, setIsMessageRendered] = useState(false);
    const [numberOfClicks, setNumberOfClicks] = useState(0);
    let rerenderMessage = '';

    // runs after every render
    // 1st parameter - function that gets called after render/rerender
    // 2nd parameter - dependency array - declare on what state or props change you want to trigger the effect
        // - a combination of componentDidMount and componentDidUpdate
        // if effect needs to be used only after the first render pass empty array - []
        // if effect needs to be used after every render - omit the 2nd param
    // if useEffect has a function in return statement that function will be called on unmount 
    useEffect(()=>{
        
    });

    const onButtonClick = () => {
        setIsMessageRendered(!isMessageRendered);
        setNumberOfClicks(numberOfClicks + 1);
    };

    return { isMessageRendered, 
             onButtonClick,
             numberOfClicks,
             rerenderMessage
            };
};

export default HomeViewStore;
