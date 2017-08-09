import React from 'react';
/**
 * Error
 */
const Err = (code, message) => {(
  <div className="error">
    <h2>What want wrong</h2>
    <p>code:{code} ({message})</p>
  </div>
)}

export default Err;
