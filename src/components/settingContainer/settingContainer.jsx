import React from 'react';
import './settingContainer.css';

const SettingContainer =({...props})=>{
    return (
      <div className="settingContainer">
        <div className='break'>
          <div className="label" id='break-label'>Break Length</div>
          <div>
              {/* increse */}
            <button className='btnSet' id="break-increment" onClick={()=>{props.BreakIncrease()}}>&#8593;</button> 
            <span id="break-length">{props.breakTime}</span>
              {/* decrese */}
            <button className='btnSet' id="break-decrement" onClick={()=>{props.BreakDecrease()}}>&#8595;</button>
          </div>
        </div>
        <div className='session'>
          <div className="label" id='session-label'>Session Length</div>
          <div>
            <button className='btnSet' id="session-increment" onClick={()=>{props.SessionIncrease()}}>&#8593;</button>
            <span id="session-length">{props.sessionTime}</span>
            <button className='btnSet' id="session-decrement" onClick={()=>{props.SessionDecrease()}}>&#8595;</button>
          </div>
        </div>
      </div>
      )

}

export default SettingContainer;