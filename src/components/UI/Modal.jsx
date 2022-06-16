import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = () => {
  return <div className={classes.backdrop} />;
};
const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};
//helper to get into overlay IDs
const portalElements = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<BackDrop />, portalElements)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElements
      )}
    </React.Fragment>
  );
};

export default Modal;
