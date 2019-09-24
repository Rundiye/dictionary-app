import React from 'react';
import { Link } from 'react-router-dom';
import DictionaryList from '../dictionaries/DictionaryList';

const Navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <DictionaryList />
      </ul>
    </nav>
  );
};

export default Navbar;
