import * as React from 'react';

const ImageButton = (props) => {
    const { imgSrc, onClick} = props;

    return (
        <button
            onClick={onClick}
            className='pageNav-btn'
        >
            <img src={ imgSrc } alt='nav' style={{ margin: 'auto' }} />
        </button>
    );
}

export default ImageButton;