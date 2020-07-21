import React, {useState, useEffect} from 'react';
import {overview, followers, totalFollowers} from './data'
import Switch from "react-switch";
import IconDown from './images/icon-down.svg'
import IconUp from './images/icon-up.svg'
import './App.scss';

function App() {

  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  return (
      
      <div className='container'>
        <div className='row align-center heading-section'>
          <div className='col'>
              <h1>Social Media Dashboard</h1>
              <div className='subheader'>Total Followers: {totalFollowers}</div>
          </div>
          <div className='col'>
          <div className='switcher-wrapper'>
              <label htmlFor='theme-switcher'>Dark Mode</label>
              <Switch onChange={() => setTheme((t) => t === 'light' ? 'dark' : 'light')} checked={theme === 'light'} 
                width={48} height={24} 
                handleDiameter={18}
                uncheckedIcon={false}
                checkedIcon={false}
                className={`switcher ${theme === 'light' ? 'unchecked' : 'checked'}`}
                id='theme-switcher'
              />
          </div>
          </div>
        </div>
        <div className='row' id={'social-media'}>
         {followers.map((data, i) => {
            return (
                 <div className='col' key={i}>
                    <div className={`card ${data.social}`}>
                        <div className='card-row'>
                          <span className='icon'><img src={data.icon} alt={data.social}/></span>
                          <span className='username'>{data.username}</span>
                        </div>
                        <div className='followers'>{data.followers}</div>
                        <div className='desc'>{data.kind}</div>
                        <div className={`analysis ${data.analysis[0] === '+' ? 'up' : 'down'}`}>
                        <img src={data.analysis[0] === '+' ? IconUp : IconDown} alt={data.analysis[0] === '+' ? 'arrow up' : 'arrow down'} />
                        {data.analysis.substr(1)} Today
                        </div>
                    </div>
                </div>
              )
         })}
        </div>
        <div className='row'>
          <div className='col'>
              <h2>Overview - Today</h2>
          </div>
        </div>
        <div className='row' id={'overview'}>
         {overview.map((data, i) => {
            return (
                 <div className='col-4' key={i}>
                    <div className={`card ${data.social}`}>
                        <div className='card-row align-center space-between'>
                          <span className='subject'>{data.subject}</span>
                          <span className='icon'><img src={data.icon} alt={data.social}/></span>
                        </div>
                        <div className='card-row align-baseline space-between'>
                          <div className='data'>{data.data}</div>
                          <div className={`analysis ${data.analysis[0] === '+' ? 'up' : 'down'}`}>
                            <img src={data.analysis[0] === '+' ? IconUp : IconDown} alt={data.analysis[0] === '+' ? 'arrow up' : 'arrow down'} />
                            {data.analysis.substr(1)}
                          </div>
                        </div>
                    </div>
                </div>
              )
         })}
        </div>
      </div>

  );

}

export default App;
