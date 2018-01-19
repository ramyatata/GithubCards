import React from 'react';
import ReactDOM from 'react-dom';

const Card = (props) => {
  return (
    <div>
      <img src={props.card.avatar_url} style={{width: '75px'}}></img>
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1em', fontWeight: 'bold'}}>{props.card.name}</div>
        <div>{props.card.company}</div>
      </div>
    </div>
  );
}

export default Card;