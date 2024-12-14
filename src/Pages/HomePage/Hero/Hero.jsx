import './Hero.css'
import Words from '../Words/Words';
export default function Hero(){
  const newWords = ["Who we are ? "];
    return<>
    <div className="Hero " id="Home">
       <div className="MB-Hero-Section1">
       
          
          
      <h1 className='MB_Paragraph1'>STIVALO</h1>
    
          <p className='MB_Paragraph'> <Words words={newWords} /> </p>
          
          <p className='MB_Paragraph3'>A leading software development firm dedicated to transforming ideas into reality.
           Specializing in website design and development, mobile application programming, and the creation of unique visual 
           identities, 
           Our team of skilled professionals combines intive technology with creative design to deliver customized 
           solutions that meet our clients' specific needs. With a focus on user experience and functionality, 
           we strive to enhance your digital presence and help you stand out in a competitive market. 
           Partner with us to bring your vision to life and drive your business forward.</p>
       </div>
       <div className="MB-Hero-Section2">
           <img className='MB-Hero-img img-fluid' src='./Images/hero.png'  alt='hero-photo'/>
       </div>
      
    </div>
    
       </>
}