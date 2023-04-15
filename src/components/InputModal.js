import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import OutputModal from "./OutputModal";

const InputModal = ({
  modalOpen,
  setModalOpen,
  setRunCode,
  inputValFunc,
  codeRes,
  codeErr,
}) => {
  const [inputVal, setInputVal] = useState("");

  const [openOutputModal, setOpenOutputModal] = useState(false);

  return (
    <>
      <div
        className={`parent_modal ${modalOpen ? "modal-open" : "modal-close"}`}
      >
        <div className="modal">
          <p>Enter Input Data</p>
          <p className="modal-text">
            Enter Input data if your program requires.
          </p>
          <input
            type="text"
            placeholder="Enter Input Data"
            className="input-box"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <div>
            <button
              className="run-btn"
              onClick={() => {
                inputValFunc(inputVal);
                setRunCode(true);
                setModalOpen(false);
                setOpenOutputModal(true);
              }}
            >
              Run Code
            </button>
          </div>
          <FaTimes className="times-icon" onClick={() => setModalOpen(false)} />
        </div>
      </div>
      <OutputModal
        openOutputModal={openOutputModal}
        setOpenOutputModal={setOpenOutputModal}
        codeRes={codeRes}
        codeErr={codeErr}
      />
    </>
  );
};

export default InputModal;
