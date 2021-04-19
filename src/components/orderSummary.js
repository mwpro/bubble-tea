import formatMoney from "../lib/formatMoney";
import { ownCupDiscountPercent } from "../data/menuConfiguration";

export default function OrderSummary({ bubbleTea }) {
    console.log(bubbleTea);
    
    let totalPrice = 0;
    for (const element in bubbleTea) {
        if (bubbleTea[element]?.price) {
            totalPrice += bubbleTea[element].price;
        }
    }
    if (bubbleTea.ownCup){
        totalPrice *= (100 - ownCupDiscountPercent)/100
    }

    return (
        <>
            <h2>Twoje zamówienie:</h2>
            <span>Rodzaj Bubble Tea: {bubbleTea.base?.name}</span>
            <br />
            <span>Rodzaj herbaty: {bubbleTea.teaType?.name}</span>
            <br />
            <span>Rozmiar: {bubbleTea.size?.name}</span>
            <br />
            <span>Syrop: {bubbleTea.syroup?.name}</span>
            <br />
            <span>Dodatek: {bubbleTea.addon?.name}</span>
            <br />
            <span>Rabat za własny kubek: {bubbleTea.ownCup ? "tak" : "nie"}</span>
            <br />
            <span>Do zapłaty: {formatMoney(totalPrice)}</span>
        </>
    );
}