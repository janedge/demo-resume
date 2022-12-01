import React from 'react';
import './index.scss';
const FormTip = props => {
  return (
    <div className="formTip">
      <span>{props.content}</span>
    </div>
  );
};

export default FormTip;
