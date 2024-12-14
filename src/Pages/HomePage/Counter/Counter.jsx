import './Counter.css'
import React, { useEffect, useState } from 'react';
import Words from '../Words/Words';

function Counter({ target, label }) {
  
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const rect = document.getElementById('counter-' + label).getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible && count < target) {
      const timer = setInterval(() => {
        setCount((prevCount) => Math.min(prevCount + 1, target)); 
      }, 100); 
      return () => clearInterval(timer);
    }
  }, [isVisible, count, target]);

  return (
    <>
    
    <div className='Container-Counter'>
       
    <div className='ttt' style={{ margin: '40px 0px', textAlign: 'center', color:'#ab882f ', borderRadius:'50%', border:'5px solid #ab882f', width:'150px' , padding:'20px' , background:' #242b36'}}>
        
      <h2 id={'counter-' + label}>{count}</h2>
      <p >{label}</p>
    </div>
    </div>
    </>
  );
}

function Counter2() {
  const newWords = ["Why Us ?"];
  return (
    <>
    <div >
    <h1 className='text-center Heading-History'>History Of Stivalo</h1>
    <p  className='text-center why'> <Words words={newWords} /></p>
    <div  className='Container-Counter ' style={{ display: 'flex', justifyContent: 'space-around',  flexWrap:'wrap' , background:' #242b36' , boxShadow:'0px 2px 6px 3px #242b36'  }}>
      <Counter target={70} label="Clients" />
      <Counter target={100} label="Projects"/>
      <Counter target={34} label="Inventions" />
      <Counter target={10} label="Years" />
    </div>
    </div>
    </>
  );
}

export default Counter2;