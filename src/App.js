import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data'


export default function App() {

  const cards = data.map(card=>{
    return <Card 
      key={card.id}
      img={card.coverImg}
      openSpots={card.openSpots}
      rating={card.stats.rating}
      title={card.title}
      price={card.price}
      rate={card.stats.rating}
      review={card.stats.reviewCount}
      location={card.location}/>
  })
  return (
    <div>
      <Navbar/>
      <Hero/>
     {cards}
    </div>
  );
}
