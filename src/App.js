import React from 'react';
import './App.css';
import sound from './Little-Girl-Laughing-A1.mp3';
import SettingContainer from './components/settingContainer/settingContainer.jsx';
import Timer from './components/Timer/Timer.jsx';
import TimerController from './components/TimerController/TimerController.jsx'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      setBreak: 1,
      setSession: 1,
      isRunning: false,
      min: 1,
      sec: 0,
      timerSession: true,
      timerBreak: false
    }
  }
  IncreaseSetBreak = () => {
    this.setState({
      setBreak: this.state.setBreak +1,
    });

  }
  DecreaseSetBreak = () => {
    if(this.state.setBreak>1){
      this.setState({
        setBreak: this.state.setBreak -1
      })
    }

  }
  IncreaseSetSession = () => {
      this.setState({
        setSession: this.state.setSession +1,
        min: this.state.min +1
      });
  }
  DecreaseSetSession = () => {
    if(this.state.setSession>1){
      this.setState({
        setSession: this.state.setSession -1,
        min: this.state.min - 1
      })
    }
  }
  
  start = ()=>{
    this.setState({isRunning: true});
    this.startTimer = setInterval(()=>this.tickTimer(), 1000);
    console.log('running');
  }

  tickTimer=()=>{
    const {sec, min} = this.state;
    if(sec>0){
        if(sec===10){
          this.setState({timerBreak:false})
        }
        this.setState({sec: this.state.sec - 1});
    }
    if(sec===0){
        if(min===0){
          this.setState({
            min: this.state.setBreak, 
            sec: 0,
            timerSession: !this.state.timerSession,
            timerBreak: true
          });
          
          console.log(this.state.timerSession, this.state.timerBreak)
        } else {
            this.setState({
              sec: 59, 
              min: this.state.min-1,
              
            })
        }
    }  
  }

  stop = () =>{
    this.setState({isRunning: false});
    clearInterval(this.startTimer);
    console.log('stop');
  }

  reset = () => {
     this.setState({
      isRunning: false, 
      min: this.state.setSession, 
      sec: 0
    });
    clearInterval(this.startTimer)

  }

  render(){
    const {setBreak, setSession, isRunning, min, sec, timerSession, timerBreak} = this.state;
    return (
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <SettingContainer 
          breakTime={setBreak} 
          sessionTime={setSession}
          BreakIncrease={this.IncreaseSetBreak}
          BreakDecrease={this.DecreaseSetBreak}
          SessionIncrease={this.IncreaseSetSession}
          SessionDecrease={this.DecreaseSetSession} 
        />
        <Timer 
          minLeft={min} 
          secLeft={sec} 
          isRunning={isRunning}
          timerLabel={timerSession}
        />
        <TimerController 
          start={this.start } 
          reset={this.reset} 
          isRunning={this.state.isRunning} 
          stop={this.stop}
        />
        {　
          ( timerBreak===true)? <div><audio src={sound} autoPlay/></div> : null
        }
      </div>
    );    
  }
}

export default App;
