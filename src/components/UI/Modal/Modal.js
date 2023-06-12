import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import Cart from "../../Cart/Cart";

const Backdrop = (props) => {
  return <div className={styles["modal__backdrop"]}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("overlay-modal")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay-modal")
      )}
    </>
  );
};

export default Modal;
