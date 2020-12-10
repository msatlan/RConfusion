import React, { useRef } from 'react';

function MyComponentTemplate(props) {
    const elementRef = useRef();

    return (
        <div
            ref={elementRef}
            onMouseOver={() => {console.log(elementRef.current.innerText=props.text)}}
            onMouseOut={() => {console.log(elementRef.current.innerText=props.defaultText)}}
        >
            {props.defaultText} 
        </div>
    )
}

export default MyComponentTemplate;