import React, { useState } from 'react';

function ButtonToggle({ title, content }) {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <h4>{title}</h4>
      <button className='btnvalid' onClick={toggleContent}>
      {showContent ? 'Masquer' : 'Afficher'}
      </button>
      {showContent && <div>{content}</div>}
    </div>
  );
}

export default ButtonToggle;
