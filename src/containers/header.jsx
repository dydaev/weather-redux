import React from 'react';

import Search from '../components/search'
import TodayDate from '../components/today_date'
import Temp from '../components/now_temp'
import Logo from '../components/logo'

const Header = props =>{
  return (
    <header>
      <div className="nowState">
          <Search focus={props.focus} {...props}/>
          <TodayDate />
          <Temp {...props.current}/>
      </div>
      <Logo />
    </header>
  )
}

export default Header;
