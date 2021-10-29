import { Fragment, ReactNode } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

interface ModalProps {
  children: ReactNode;
}

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props: ModalProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal = (props: ModalProps) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
