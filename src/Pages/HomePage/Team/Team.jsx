import './Team.css'
import React, { useEffect, useState } from 'react';
import Words from '../Words/Words';

import { Card, Carousel , Button} from 'react-bootstrap';
const newWords = ["We have a great team ! "]; // الكلمات التي نريد كتابتها

const cardDataTeam = [
  {
    imgSrc: "./Images/manager.jpg",
    title: 'Mohammad',
    title2: 'Manager',
    text: "Interior Design"
  },
  {
    imgSrc: "./Images/backend.jpg",
    title: "Hamza",
    title2: 'Back-End Developer',
    text: "IT Engineering"
  },
  {
    imgSrc: "./Images/frontend.jpg",
    title: "Maya",
    title2: "Front-End Developer",
    text: "IT Engineering"
  },
  {
    imgSrc: "./Images/flutter.jpg",
    title: 'Mohammad',
    title2: 'UI/UX',
    text: "Interior Design"
  },
  {
    imgSrc: "./Images/backend.jpg",
    title: 'Ahmad',
    title2: 'Flutter',
    text: "IT Engineering"
  },
  {
    imgSrc: "./Images/hr2.jpg",
    title: 'Rama',
    title2: 'Full Stack',
    text: "IT Engineering"
  },
  {
    imgSrc: "./Images/hr2.jpg",
    title: 'Reema',
    title2: 'HR',
    text: "IT Engineering"
  },
  {
    imgSrc: "./Images/hr2.jpg",
    title: 'Aya',
    title2: 'UI/UX',
    text: "IT Engineering"
  }
  
];

export default function Team() {
  const newWords = ["We have a great team ! "]; 
  const cardsPerSlide = 3; // عدد البطاقات في كل شريحة

  const slides = [];
  for (let i = 0; i < cardDataTeam.length; i += cardsPerSlide) {
    slides.push(cardDataTeam.slice(i, i + cardsPerSlide));
  }

  return (
    <>
      <h1 className='Team-Heading' id='Team'>Our Creative Team</h1>
      <p className='text-center great-team'> <Words words={newWords} /></p>
      <Carousel controls={true} interval={3000} slide={true} pause="hover">
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-around Team-Cards ">
              {slide.map((card, cardIndex) => (
                <Card className='Card-Team' key={cardIndex}>
                  <div className="border-img">
                    <Card.Img variant="top" className='Img-Card-Team' src={card.imgSrc} />
                  </div>
                  <Card.Body className='Body-card text-center'>
                    <Card.Title className='Team-title'>{card.title}</Card.Title>
                    <Card.Title className='Team-title'>{card.title2}</Card.Title>
                    <Card.Text className='Team-text'>
                      {card.text}
                    </Card.Text>
                   <a href='#linkedin'> <Button variant="primary" className='btn-team-card'>Linked_In</Button> </a>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}