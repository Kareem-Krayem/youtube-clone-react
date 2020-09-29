import React, { useState } from 'react';
import './Header.css';

import { Avatar } from '@material-ui/core';
import {
  VideoCallSharp,
  Menu,
  SearchSharp,
  Apps,
  Notifications,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

function Header() {
  const [search, setSearch] = useState('');
  return (
    <div className='header'>
      <div className='header__left'>
        <Menu />
        <Link to='/'>
          <img
            className='header__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
            alt='Youtube Logo'
          />
        </Link>
      </div>
      <div className='header__input'>
        <input
          value={search}
          type='text'
          placeholder='Search'
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to={`/search/${search}`}>
          <SearchSharp className='header__inputButton' />
        </Link>
      </div>
      <div className='header__icons'>
        <VideoCallSharp className='header__icon' />
        <Apps className='header__icon' />
        <Notifications className='header__icon' />
        <Avatar
          src='https://avatars0.githubusercontent.com/u/50558667?s=460&u=a301ff7c168d2048e0c2d5fe956cfce31423525d&v=4'
          alt='Kareem Krayem'
        />
      </div>
    </div>
  );
}

export default Header;
