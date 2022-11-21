import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import Nav from './Components/Nav';
import TextContainer from './Components/TextContainer';

function App() {
  return (
    <div className='main'>
      <Nav />
      <TextContainer />
    </div>
  );
}

export default App;
