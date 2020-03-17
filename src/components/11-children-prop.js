import React from 'react';

const Sidebar = props => {
  props.children.props.children.map(child => console.log(child.type));

  return <div className='sidebar'>{props.children}</div>;
};

export default Sidebar;
