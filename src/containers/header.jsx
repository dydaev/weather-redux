import React from 'react';

import Search from '../components/search'
import TodayDate from '../components/today_date'
import Temp from '../components/now_temp'
import Logo from '../components/logo'

const Header = props =>{
  let content = "loading";// = <img src="http://gifki.info/uploads/posts/2017-07/1498877285_2965-kaplya.gif" alt="lodaing"/>;
  if (props.weather.city !== undefined) {
      content = <div className="nowState">
                  <Search 
                    focus={props.focus} 
                    location={props.weather.city.name}
                    country={props.weather.city.country}
                  />
                <TodayDate />
                <Temp {...props.current}/>
                </div>
  }
  return (
    <header>
      {content}
      <Logo />
    </header>
  )
}

export default Header;
