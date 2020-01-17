import React from "react";
import PropTypes from 'prop-types';

function InputComponent({ id, checked, onClick }) {
    const handleClick = (event) => {
    onClick(event.target.value);
  }

  return (
    <div>
      <input type="radio" name="manufacturere" id={id} value={id} 
             onClick={handleClick} 
             checked={checked ? "checked" : ""} />
      <label for={id}>{id}</label>
    </div>
  );
}

InputComponent.propTypes={
  id: PropTypes.string.isRequired,
  checked: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default InputComponent;