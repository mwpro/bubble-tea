import React, { useState } from 'react';
import { addons, addonsByCategory, drinkBases, sizes, teaTypes, syroups, ownCupDiscountPercent } from '../data/menuConfiguration';
import OrderSummary from '../components/orderSummary';
import formatMoney from '../lib/formatMoney';

export default function Configurator() {
  const defaultTea = {
    base: undefined,
    teaType: undefined,
    size: undefined,
    syroup: undefined,
    addon: undefined,
    ownCup: false
  };

  const [bubbleTea, setBubbleTea] = useState(defaultTea)

  const onBubbleTeaDictionaryChange = (dictionary, propName, itemId) => {
    onBubbleTeaChange(propName, dictionary.filter(x => x.id == itemId)[0])
  };

  
  const onBubbleTeaChange = (propName, value) => {
    setBubbleTea(b => { return { ...b, [propName]: value }; });
  };

  return (
    <>
      <h2>Stwórz swoją Bubble Tea</h2>

      <label htmlFor="drinkBase">Rodzaj Bubble Tea</label>
      <br />
      <select name="drinkBase" defaultValue="Wybierz" value={bubbleTea.base?.id} onChange={e => onBubbleTeaDictionaryChange(drinkBases, 'base', e.target.value)}>
        <option disabled>Wybierz</option>
        <option disabled>---</option>
        { drinkBases.map(x => <option key={x.id} value={x.id}>{x.name} {x.price > 0 && `(+${formatMoney(x.price)})`}</option>)}
      </select>
      <br />

      <label htmlFor="teaType">Rodzaj herbaty</label>
      <br />
      <select name="teaType" value={bubbleTea.teaType?.id} defaultValue="Wybierz" onChange={e => onBubbleTeaDictionaryChange(teaTypes, 'teaType', e.target.value)}>
        <option disabled>Wybierz</option>
        <option disabled>---</option>
        { teaTypes.map(x => <option key={x.id} value={x.id}>{x.name} {x.price > 0 && `(+${formatMoney(x.price)})`}</option>)}
      </select>
      <br />

      <label htmlFor="drinkSize">Rozmiar</label>
      <br />
      <select name="drinkSize" value={bubbleTea.size?.id} defaultValue="Wybierz" onChange={e => onBubbleTeaDictionaryChange(sizes, 'size', e.target.value)}>
        <option disabled>Wybierz</option>
        <option disabled>---</option>
        { sizes.map(x => <option key={x.id} value={x.id}>{x.name} {x.price > 0 && `(+${formatMoney(x.price)})`}</option>)}
      </select>
      <br />

      <label htmlFor="syroup">Syrop</label>
      <br />
      <select name="syroup" value={bubbleTea.syroup?.id} defaultValue="Wybierz" onChange={e => onBubbleTeaDictionaryChange(syroups, 'syroup', e.target.value)}>
        <option disabled>Wybierz</option>
        <option disabled>---</option>
        { syroups.map(x => <option key={x.id} value={x.id}>{x.name} {x.price > 0 && `(+${formatMoney(x.price)})`}</option>)}
      </select>
      <br />

      <label htmlFor="addon">Dodatek</label>
      <br />
      <select name="addon" value={bubbleTea.addon?.id} defaultValue="Wybierz" onChange={e => onBubbleTeaDictionaryChange(addons, 'addon', e.target.value)}>
        <option disabled>Wybierz</option>
        <option disabled>---</option>
        
        { addonsByCategory.map(category => <React.Fragment key={category.id}>
            <option disabled>{category.categoryName}</option>
            { category.addons.map(x => <option key={x.id} value={x.id}>&nbsp;&nbsp;{x.name} {x.price > 0 && `(+${formatMoney(x.price)})`}</option>)}
          </React.Fragment>)}
      </select>
      <br />

      <input name="ownCup" checked={bubbleTea.ownCup} onChange={e => onBubbleTeaChange('ownCup', e.target.checked)} type="checkbox" />&nbsp;
      <label htmlFor="ownCup">Mam własny kubek - zniżka {ownCupDiscountPercent}%</label>
      <br />

      <OrderSummary bubbleTea={bubbleTea} />
    </>
  );
}