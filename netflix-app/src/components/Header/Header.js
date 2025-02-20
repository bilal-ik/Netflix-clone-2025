import React from 'react'
import NetflixLogo from '../../assets/images/01_Netflix_Logo/Netflix_Logo_CMYK.png';
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  return (
    <div className='header_outer_container'>
      <div className='header_container'>
        <div className='header_left'>
          <ul>
            <li className='netflixLogo'>
              <img src={NetflixLogo} alt="LogoImage"/>
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className='header_right'>
          <ul>
            <li><span><SearchIcon/></span></li>
            <li><span><NotificationsNoneIcon/></span></li>
            <li><span><AccountBoxIcon/></span></li>
            <li><span><ArrowDropDownIcon/></span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;
