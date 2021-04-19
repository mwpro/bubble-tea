import React, { useState } from 'react';
import './App.css';

function App() {
  const defaultTea = {
    base: undefined,
    teaType: undefined,
    size: undefined,
    syroup: undefined,
    addon: undefined,
    ownCup: false
  };

  const [bubbleTea, setBubbleTea] = useState(defaultTea)

  const onBubbleTeaChange = (prop, value) => {
    setBubbleTea(b => { return { ...b, [prop]: value }; });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🧋 Bubble Tea Shop 🧋</h1>
      </header>
      <h2>Stwórz swoją Bubble Tea</h2>

      <label htmlFor="drinkBase">Rodzaj Bubble Tea</label>
      <br />
      <select name="drinkBase" value={bubbleTea.base} onChange={e => onBubbleTeaChange('base', e.target.value)}>
        <option selected disabled>Wybierz</option>
        <option disabled>---</option>
        <option>Klasyczna</option>
        <option>Mleczna (mleko zwykłe)</option>
        <option>Mleczna (mleko sojowe)</option>
      </select>
      <br />

      <label htmlFor="teaType">Rodzaj herbaty</label>
      <br />
      <select name="teaType" value={bubbleTea.teaType} onChange={e => onBubbleTeaChange('teaType', e.target.value)}>
        <option selected disabled>Wybierz</option>
        <option disabled>---</option>
        <option>Czarna</option>
        <option>Zielona</option>
        <option>Oolong</option>
      </select>
      <br />

      <label htmlFor="drinkSize">Rozmiar</label>
      <br />
      <select name="drinkSize" value={bubbleTea.size} onChange={e => onBubbleTeaChange('size', e.target.value)}>
        <option selected disabled>Wybierz</option>
        <option disabled>---</option>
        <option>Zwykły</option>
        <option>Powiększony</option>
      </select>
      <br />

      <label htmlFor="syroup">Syrop</label>
      <br />
      <select name="syroup" value={bubbleTea.syroup} onChange={e => onBubbleTeaChange('syroup', e.target.value)}>
        <option selected disabled>Wybierz</option>
        <option disabled>---</option>
        <option>Melon</option>
        <option>Zielone jabłko</option>
        <option>Ananas</option>
        <option>Jagoda</option>
        <option>Wiśnia</option>
        <option>Biała brzoskwinia</option>
      </select>
      <br />

      <label htmlFor="addon">Dodatek</label>
      <br />
      <select name="addon" value={bubbleTea.addon} onChange={e => onBubbleTeaChange('addon', e.target.value)}>
        <option selected disabled>Wybierz</option>
        <option disabled>---</option>
        <option>Tapioka</option>
        <option disabled>Kulki boba</option>
        <option>&nbsp;&nbsp;Mango</option>
        <option>&nbsp;&nbsp;Marakuja</option>
        <option>&nbsp;&nbsp;Truskawka</option>
        <option>&nbsp;&nbsp;Kiwi</option>
        <option>&nbsp;&nbsp;Wiśnia</option>
        <option disabled>Żelki</option>
        <option>&nbsp;&nbsp;Zielone jabłko</option>
        <option>&nbsp;&nbsp;Winogrono</option>
        <option>&nbsp;&nbsp;Liczi</option>
      </select>
      <br />

      <input name="ownCup" checked={bubbleTea.ownCup} onChange={e => onBubbleTeaChange('ownCup', !bubbleTea.ownCup)} type="checkbox" />&nbsp;
      <label htmlFor="ownCup">Mam własny kubek</label>
      <br />

      <h2>Twoje zamówienie:</h2>
      <span>Rodzaj Bubble Tea: {bubbleTea.base}</span>
      <br />
      <span>Rodzaj herbaty: {bubbleTea.teaType}</span>
      <br />
      <span>Rozmiar: {bubbleTea.size}</span>
      <br />
      <span>Syrop: {bubbleTea.syroup}</span>
      <br />
      <span>Dodatek: {bubbleTea.addon}</span>
      <br />
      <span>Rabat za własny kubek: {bubbleTea.ownCup ? "tak" : "nie"}</span>
      <br />
      <span>Do zapłaty: {0.00}</span>
    </div>
  );
}

export default App;