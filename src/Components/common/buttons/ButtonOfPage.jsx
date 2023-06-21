import React from 'react'

function ButtonOfPage({handle, nameButton, handleBoolean, styleButton}) {
  return (
    <>
      <button
        className={`btn ${styleButton} ${
          handleBoolean ? "disabled-button" : ""
        } `}
        onClick={handle}
        disabled={handleBoolean}
      >
        {nameButton}
      </button>
    </>
  );
}

export default ButtonOfPage