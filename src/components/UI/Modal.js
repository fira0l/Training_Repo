
import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";


const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />,  portalElement) }
        {ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          portalElement
        )}
      {/* <Backdrop onClose={props.onClose} />
      <ModalOverlay>{props.children}</ModalOverlay> */}
    </Fragment>
  );
};

export default Modal;
