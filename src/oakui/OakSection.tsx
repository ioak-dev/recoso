import React, { useState, useEffect } from 'react';
import './styles/oak-section-mockback.scss';

interface Props {
  children?: any;
}

const OakSection = (props: Props) => {
  return (
    <div className="oak-section">
      <div className="app-text">{props.children}</div>
    </div>
  );
};

export default OakSection;
