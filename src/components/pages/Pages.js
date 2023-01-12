import { useState } from "react";
import { Card, CardList } from '../cards/Cards';
import './Pages.css';
import JSON_DATA from '../../static/card_lists.json';

function Tab(props) {
    return (
        <button
            className={props.isActive ? "tab tab-active" : "tab tab-inactive"}
            id={"tab_" + props.id} key={props.id}
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

function PageControl() {

    const [activeId, setActiveId] = useState(0);

    // populate data
    const data = JSON_DATA.data.map((cards_list) => CardList({ cards: cards_list.cards.map((card) => Card(card)) }));

    const categories = ["Numbers", "Colors", "Verbs", "Adjectives"];

    let pages = [];
    let propsList = [];

    categories.forEach((category, category_index) => {
        propsList.push({ id: category_index, text: category, isActive: (category_index === activeId) });
        pages.push(Page({ ...propsList[category_index], content: data[category_index] }));
    })

    return (
        <div className="page-control" id="page_control_0">
            {TabGroup({ list: propsList, onClick: setActiveId })}
            {pages}
        </div>
    );

}

function Page(props) {

    return (
        <div className={props.isActive ? "page page-active" : "page page-inactive"} key={props.id} id={"page_" + props.id}>
            <h2>{props.text}</h2>
            {props.content}
        </div>
    );

}

export { PageControl };