import React from 'react';
import ReactDOM from 'react-dom';

import Form from './components/form.jsx';
import CardList from './components/cardList.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cards: [
        {'name': 'Paul O’Shannessy',
        'avatar_url': 'https://avatars1.githubusercontent.com/u/8445?v=4',
        'company': 'Facebook'
        },
        {'name': 'Fabien Potencier',
        'avatar_url': 'https://avatars3.githubusercontent.com/u/47313?v=4',
        'company': 'SensioLabs'
        },
        {'name': 'Alex Crichton',
        'avatar_url': 'https://avatars1.githubusercontent.com/u/64996?v=4',
        'company': 'Mozilla'
        }
      ]
    };

    this.addCardToList = this.addCardToList.bind(this);
  }

  addCardToList(cardInfo) {
    this.setState({cards: this.state.cards.concat(cardInfo)})
  }

  render() {
    return (
      <div>
        <Form addCard={this.addCardToList}></Form>
        <CardList cards={this.state.cards}></CardList>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));