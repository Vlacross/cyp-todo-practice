import React from 'react';
import PropTypes from 'prop-types';

let linkStyle = {
  // width: '40px',
  // height: '40px',
  marginLeft: '4px'
}

const Link = ({ active, children, onClick, className }) => (

  <button 
    className={className}
    onClick={onClick}
    disabled={active}
    style={linkStyle}>
    {children}
  </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link