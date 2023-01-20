import { useState } from 'react';
import './Cards.css';

/**
 * Returns a flexbox ul of cards.
 * @param {*} props the properties object
 * @returns a flexbox of cards.
 */
function Deck(props) {

    return <ul id={props.id} category={props.category} className='deck'>{props.cards}</ul>;

}

/**
 * Returns a clickable, two-sided li (stylized to look like a flashcard).
 * @param {*} props the properties object
 * @returns a clickable card <li />
 */
function Card(props) {

    const [flipped, flip] = useState(false);

    return (<li
        id={'card_' + props.id}
        className="card"
        key={props.id}
        onClick={() => flip(!flipped)}>
        <div className='card-content'>
            {(flipped ? props.text.back : props.text.front)}
        </div>
    </li>);

}

export { Card, Deck };