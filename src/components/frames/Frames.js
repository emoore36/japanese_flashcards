import { useState } from "react";
import { Card, Deck } from '../cards/Cards';
import './Frames.css';
import JSON_DATA from '../../static/card_lists.json';

function Tab(props) {
    return (
        <button
            className={props.isActive ? "tab tab-active" : "tab tab-inactive"}
            id={"tab_" + props.id}
            key={props.id}
            onClick={() => props.onClick(props.id)}>
            {props.text}
        </button>
    );
}

function TabGroup(props) {

    let tabs = [];

    // create tabs to tabgroup
    props.list.forEach((x) => {
        tabs.push(Tab({ ...x, onClick: props.onClick }));
    });

    return (
        <ul className="tab-group">{tabs}</ul>
    );

}

function FrameControl() {

    const [activeId, setActiveId] = useState(0);

    // populate data
    const data = JSON_DATA.data.map((cards_list) => Deck({ id: cards_list.id, category: cards_list.category, cards: cards_list.cards.map((card) => Card(card)) }));

    let frames = [];
    let propsList = [];

    data.forEach((deck, deck_index) => {
        propsList.push({ id: deck_index, text: deck.props.category, isActive: (deck_index === activeId) });
        frames.push(Frame({ ...propsList[deck_index], content: deck }));
    })

    return (
        <div className="frame-control" id="frame_control_0">
            {TabGroup({ list: propsList, onClick: setActiveId })}
            {frames}
        </div>
    );

}

function Frame(props) {

    return (
        <div className={props.isActive ? "frame frame-active" : "frame frame-inactive"}
            key={props.id}
            id={"frame_" + props.id}>
            <h2>{props.text}</h2>
            {props.content}
        </div>
    );

}

export { FrameControl };