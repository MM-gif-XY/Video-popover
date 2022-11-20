import React, { useRef, useState } from 'react';
import PopupWindow from './components/popupWindow'
import './App.css'


function App() {
  const myRef = useRef(null)
  const according = () => {
    (myRef.current as any).shutdown();
  }
  return (
    <div className="App">
      <button onClick={() => { according() }}>点击显示</button>
      <PopupWindow ref={myRef} />
    </div>
  );
}

export default App;
