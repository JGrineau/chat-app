import React from 'react'
import "./CustomButton.css";

const CustomButton = ({children, onClick }) => {
    
  return (
    <button className="button-class" onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton
