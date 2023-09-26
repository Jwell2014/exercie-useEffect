import React, { useState } from 'react';

function ToggleBlock({ title, content }) {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <h4>{title}</h4>
      <button onClick={toggleContent}>Afficher/Masquer</button>
      {showContent && <div>{content}</div>}
    </div>
  );
}

export default ToggleBlock;
