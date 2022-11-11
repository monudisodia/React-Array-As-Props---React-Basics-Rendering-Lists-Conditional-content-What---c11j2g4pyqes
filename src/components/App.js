import React from 'react'
import '../styles/App.css';
const arr = JSON.parse(window.localStorage.getItem('props') || `["hello","world"]`) // do not change
const Join = (props) =>{
  return(
    <div id ="join">
      {props.arr.join(",")}
    </div>
  )
}
const App = () => {

  return (
    <div id="main">
      <Join arr={arr} />
    </div>
  )
}


export default App;
