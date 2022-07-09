import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");
const ModalForm = ({children, modalIsOpen}, ) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
      >
        {children}
      </Modal>
    </div>
  );
};

export default ModalForm;
