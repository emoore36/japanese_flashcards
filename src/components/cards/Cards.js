import { useState } from 'react';
import './Cards.css';

/**
 * Returns a flexbox ul of cards.
 * @param {*} props the properties object
 * @returns a flexbox of cards.
 */
function CardList(props) {

    const cards = [
        Card({ id: 1, text: { back: "One", front: "一" } }),
        Card({ id: 2, text: { back: "Two", front: "二" } }),
        Card({ id: 3, text: { back: "Three", front: "三" } }),
        Card({ id: 4, text: { back: "Four", front: "四" } }),
        Card({ id: 5, text: { back: "Five", front: "五" } }),
        Card({ id: 6, text: { back: "Six", front: "六" } }),
        Card({ id: 7, text: { back: "Seven", front: "七" } }),
        Card({ id: 8, text: { back: "Eight", front: "八" } }),
        Card({ id: 9, text: { back: "Nine", front: "九" } }),
        Card({ id: 10, text: { back: "Ten", front: "十" } })
    ];

    return <ul className='card-list'>{cards}</ul>;

}

/**
 * Returns a clickable, two-sided li (stylized to look like a flashcard).
 * @param {*} props the properties object
 * @returns a clickable card <li />
 */
function Card(props) {

    const [flipped, flip] = useState(false);

    return (<li className="card" key={props.id} onClick={() => flip(!flipped)}>
        <div className='card-content'>{(flipped ? props.text.back : props.text.front)}</div>
    </li>);

}

export { CardList };