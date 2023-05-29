import React from 'react'

function ButtonOfPage({handle, nameButton, handleBoolean}) {
  return (
    <>
      <button
        className={`btn btn-success ${handleBoolean ? "disabled-button" : ""}`}
        onClick={handle}
        disabled={handleBoolean}
      >
        {nameButton}
      </button>
    </>
  );
}

export default ButtonOfPage