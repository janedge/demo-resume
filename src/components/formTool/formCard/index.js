import React from 'react';
import './index.scss';
export default function FormCard(props) {
  return (
    <div className={`formCard ${props.className || ''}`}>
      {!!props.title && (
        <div className="cardHeader">
          <div className="text">{props.title}</div>
          {props.editFlag && (
            <div className="edit" onClick={props.editAction}>
              编辑
            </div>
          )}
        </div>
      )}
      <div className="cardContent">{props.children}</div>
    </div>
  );
}
