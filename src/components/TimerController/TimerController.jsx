import React from 'react';

const TimerController = ({start, reset, isRunning, stop})=>(
    <div>
        <button onClick={isRunning===false?()=>start():()=>stop()}>start-stop</button>
        <button onClick={()=>{reset()}}>reset</button>
    </div>
)

export default TimerController