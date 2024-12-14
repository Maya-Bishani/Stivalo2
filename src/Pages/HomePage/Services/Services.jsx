import './Services.css'
import Card from 'react-bootstrap/Card';
import { FaCode } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { TbEyeCode } from "react-icons/tb";
import React, { useEffect, useState } from 'react';
import Words from '../Words/Words';
const cardDataServices = [
  {
    icon: <FaCode />, 
    title: 'Web development',
  },
  {
    icon: <FaLaptopCode />, 
    title: "App development",
  },
  {
    icon: <TbEyeCode />,
    title: "Visual identity",
  }, 
];

export default function Services(){
  const newWords = ["What we offer ?"];

    return (
      <>
        <h1 className='Services-Heading anim4' id='Services'>Our Services</h1>  
        <p className='what-offer'><Words words={newWords} /> </p>
        <div className="Services-Cards">
          {cardDataServices.map((card, index) => (
            <Card className='Card-Service' key={index}>
              <Card.Body className='text-center'>
                <div className='Icon-Container'>
                  {card.icon}
                </div>
                <Card.Title className='Services-title'>{card.title}</Card.Title>
                <Card.Text className='Services-text'>
                  {card.text}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </>
    );
}