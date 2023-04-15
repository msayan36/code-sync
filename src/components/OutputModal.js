import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const OutputModal = ({
  openOutputModal,
  setOpenOutputModal,
  codeRes,
  codeErr,
}) => {
  const [inputVal, setInputVal] = useState("");

  return (
    <>
      <div
        className={`parent_modal ${
          openOutputModal ? "modal-open" : "modal-close"
        }`}
      >
        <div className="modal">
          <p>Output:</p>
          {codeRes ? (
            <p className="success">Success</p>
          ) : (
            codeErr && <p className="error">Error</p>
          )}
          {codeRes ? <p>{codeRes}</p> : codeErr && <p>{codeErr}</p>}
          <FaTimes
            className="times-icon"
            onClick={() => setOpenOutputModal(false)}
          />
        </div>
      </div>
    </>
  );
};

export default OutputModal;
