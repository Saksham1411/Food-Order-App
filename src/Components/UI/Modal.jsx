import { Fragment } from "react";
// import ReactDOM from 'react-dom';
import { createPortal } from "react-dom";
const Backdrop = props => {
    return <div className="fixed top-0 left-0 w-full h-screen z-20 bg-black bg-opacity-75" onClick={props.onHideCart}></div>
}

const ModalOverlay = props => {
    return (
        <div className="fixed top-20 left-1/3 w-1/3  p-3  bg-white rounded-2xl z-30">
            <div>{props.children}</div>
        </div>
    )
}

let over = document.getElementById('overlays');
console.log(over);

const Modal = props => {
    return <Fragment>
        {createPortal(<Backdrop onHideCart = {props.onHideCart} />, over)}
        {createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
            over
        )}
    </Fragment>
}

export default Modal;