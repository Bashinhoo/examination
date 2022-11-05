import * as React from 'react';

const Modal = (props) => {

    if(!props.open) {
        return null;
    };

    return (
        <div
            // onClick={props.closeOnOutsideClick ? props.onClose: ()=>{}}
            onClick={props.onClose}
            className='modal'
       >
            <div
                onClick={(e) => e.stopPropagation()}
                className='modal-child'
            >
                {props.children}
            </div>
        </div>
    );
}

export default Modal;