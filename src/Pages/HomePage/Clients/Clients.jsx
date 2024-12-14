import './Clients.css'
import { Carousel } from 'react-bootstrap';
import Words from '../Words/Words';

export default function Clients(){
    const newWords = ["Clients we have achieved success with"];
   
return<>
 <h1 className='Heading-Clients' id='Clients'> Our Clients over the years</h1>
 <p className='text-center client'> <Words words={newWords} /></p>
            <div className="carousel-container">
                <Carousel className="carousel" interval={2000} controls={false} indicators={false}>
                    <Carousel.Item>
                        <div className="carousel-images">
                            <img className='company-img' src='./Images/techcompany.png' alt='logo' />
                            <img className='company-img' src='./Images/company.png' alt='logo' />
                            <img className='company-img' src='./Images/techcompany.png' alt='logo' />
                            <img className='company-img' src='./Images/company.png' alt='logo' />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-images">
                            <img className='company-img' src='./Images/techcompany.png' alt='logo' />
                            <img className='company-img' src='./Images/company.png' alt='logo' />
                            <img className='company-img' src='./Images/techcompany.png' alt='logo' />
                            <img className='company-img' src='./Images/company.png' alt='logo' />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
}