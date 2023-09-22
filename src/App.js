

import React, { useState, useEffect } from 'react';
import './App.css'; 
import slide1 from './image/slide1.jpg';
import slide2 from './image/slide2.jpg';
import slide3 from './image/slide3.jpg';
import slide4 from './image/slide4.jpg';

function App() {
  const images = [slide1, slide2 ,slide3, slide4]; 
  const colors = ['green', 'blue', 'pink','purple']; 

  const [index, setIndex] = useState(0);

  useEffect(() => {
    
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(interval); 
    };
  }, []);

  return (
    <div
      className="App"
       style={{
        backgroundColor: colors[index],
        backgroundImage: `url(${images[index]})`,
        // backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // width: '100vw',
        height: '100vh',
        transition: 'background 1s', 
      //  marginLeft:'30%'
      }}
    >
      
    </div>
  );
}

export default App;
