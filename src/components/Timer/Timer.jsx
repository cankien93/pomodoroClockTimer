import React from 'react';

const Timer = ({...props})=>{
    const min = props.minLeft;
    const sec = props.secLeft;
    const timerLabel = props.timerLabel
    return(
        <div>
            <div id='timer-label'>{timerLabel?'session':'break'}</div>
            <div id='time-left'>
                {min>=10 ? min : `0${min}`}
                <span>:</span>
                {sec>=10? sec : `0${sec}`}
            </div>
        </div>
    )}

export default Timer;