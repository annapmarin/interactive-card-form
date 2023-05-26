import { useState } from 'react';
import './assets/styles/index.css';
import cardBack from './assets/images/bg-card-back.png';
import cardFront from './assets/images/bg-card-front.png';
import cardLogo from './assets/images/card-logo.svg';
import Form from './components/form';

function App() {
  const [cardName, setCardName] = useState('Jane Appleseed');
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
  const [cardMonth, setCardMonth] = useState('00');
  const [cardYear, setCardYear] = useState('00');

  return (
    <main>
      <div className="App">
        <div className="cards">
        <img id="card-back" src={cardBack} alt="" />
        <img id="card-front" src={cardFront} alt="" />
        <img id="card-logo" src={cardLogo} alt="" />
        <div className="cards__text">
          <span className="cards__text__number">{cardNumber}</span>
          <span className="cards__text__name">{cardName}</span>
          <span className="cards__text__expiration">{cardMonth}/{cardYear}</span>
        </div>
        </div>
        <section className="form__container">
          <Form sendName={setCardName} sendNumber={setCardNumber} sendMonth={setCardMonth} sendYear={setCardYear} />
        </section>
      </div>
    </main>
  )
}

export default App
