import React from 'react';
import ReactDOM from 'react-dom';

import Card from './card.jsx';

const CardList = (props) => {
  return(
   props.cards.map((card, ind) => <Card card={card} key={ind}></Card>)
  );
}

export default CardList;