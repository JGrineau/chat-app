import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

import CustomButton from '../CustomButton/CustomButton';

const Sidebar = () => {
  return (
    <div>
      <div className='container'>
        <Link to="/chat1">
          <CustomButton>Chat 1</CustomButton>
          
        </Link>
        <Link to="/chat2">
          <CustomButton>Chat 2</CustomButton>
        </Link>
        <Link to="/chat3">
          <CustomButton>Chat 3</CustomButton>
        </Link>
        <Link to="/chat4">
          <CustomButton>Chat 4</CustomButton>
        </Link>
        <Link to="/chat5">
          <CustomButton>Chat 5</CustomButton>
        </Link>
        <Link to="/chat6">
          <CustomButton>Chat 6</CustomButton>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
