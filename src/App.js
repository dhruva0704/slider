

import React, { useState, useEffect } from 'react';
import './App.css'; 



function App() {
  const images = ["slide1.webp", "slide2.webp" ,"slide3.webp", "slide4.webp"]; 
  const colors = ['green', 'Teal', '	Maroon','purple']; 

  const [index, setIndex] = useState(0);

  useEffect(() => {
    
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

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
        backgroundSize: '50% auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'right',
        width: '100vw',
        height: '100vh',
        transition: 'background 3s', 
        display:'flex',
        // textAlign:'center',
        // alignItems:'center',
        padding:'70px',
        color:'white',
        right:'0',
        position:'absolute',
        marginTop:'5%',
        marginLeft:'7%',
        // position:'absolute',
        flexDirection: 'column',
    
        
        // marginLeft:'30%'
      }}
     
    >
        &nbsp; 
         &nbsp; &nbsp; &nbsp; &nbsp;
         <h4>Find listings across</h4>
         &nbsp; &nbsp; &nbsp; &nbsp;
         <h1>Global Multi-Platform Networks</h1>
         <div></div>
         &nbsp; &nbsp; &nbsp; &nbsp;

         <form class="form-inline my-2 my-lg-0">
         <input
          className="form-control"
          type="search"
          placeholder="try searching food"
          aria-label="Search"
          style={{
            height: '50px', 
            width: '450px',  
          }}
        />
      <button
          type="button"
          className="btn btn-primary"
          style={{
            height: '50px',  
            fontSize: '20px', 
          }}
        >
          Search
        </button>
      
    
    </form>
         
    <div> &nbsp;
      <h4>Popular:<button type="button" class="btn btn-outline-light"style={{ marginRight: '10px' }}>Food</button>
      <button type="button" class="btn btn-outline-light"style={{ marginRight: '10px' }}>Apparel</button>
      <button type="button" class="btn btn-outline-light"style={{ marginRight: '10px' }}>Beauty</button>
      <button type="button" class="btn btn-outline-light"style={{ marginRight: '10px' }}>Furniture</button>
     </h4>
  </div>
  
   
  </div>
      
        
      
    
  );
}

export default App;



