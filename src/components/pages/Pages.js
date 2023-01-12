import { useState } from "react";
import { Card, CardList } from "../cards/Cards";
import './Pages.css'

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

    props.list.forEach((x, i, arr) => {
        tabs.push(Tab({ ...arr[i], onClick: props.onClick }));
    });

    return (
        <ul className="tab-group">{tabs}</ul>
    );

}

function PageControl() {

    const [activeId, setActiveId] = useState(0);

    const data = [
        CardList({
            data: [
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
            ]
        }),
        CardList({
            data: [
                Card({ id: 1, text: { back: "Red", front: "赤" } }),
                Card({ id: 2, text: { back: "Blue", front: "青" } }),
                Card({ id: 3, text: { back: "Green", front: "緑" } }),
                Card({ id: 4, text: { back: "Orange", front: "オレンジ" } }),
                Card({ id: 5, text: { back: "Purple", front: "紫" } }),
                Card({ id: 6, text: { back: "Yellow", front: "黄色" } }),
                Card({ id: 7, text: { back: "Black", front: "黒" } }),
                Card({ id: 8, text: { back: "White", front: "白" } }),
                Card({ id: 9, text: { back: "Brown", front: "茶色" } }),
                Card({ id: 10, text: { back: "Pink", front: "ピンク" } })
            ]
        }),
        CardList({
            data: [
                Card({ id: 1, text: { back: "to eat", front: "食べる" } }),
                Card({ id: 2, text: { back: "to drink", front: "飲む" } }),
                Card({ id: 3, text: { back: "to sleep", front: "寝る" } }),
                Card({ id: 4, text: { back: "to get up", front: "起きる" } }),
                Card({ id: 5, text: { back: "to read", front: "読む" } }),
                Card({ id: 6, text: { back: "to wear", front: "着る" } }),
                Card({ id: 7, text: { back: "to laugh", front: "笑う" } }),
                Card({ id: 8, text: { back: "to dance", front: "踊る" } }),
                Card({ id: 9, text: { back: "to run", front: "走る" } }),
                Card({ id: 10, text: { back: "to walk", front: "歩く" } })
            ]
        }),
        CardList({
            data: [
                Card({ id: 1, text: { back: "Big", front: "大きい" } }),
                Card({ id: 2, text: { back: "Small", front: "小さい" } }),
                Card({ id: 3, text: { back: "Slow", front: "遅い" } }),
                Card({ id: 4, text: { back: "Fast", front: "速い" } }),
                Card({ id: 5, text: { back: "Near", front: "近く" } }),
                Card({ id: 6, text: { back: "Far", front: "遠い" } }),
                Card({ id: 7, text: { back: "Good", front: "良い" } }),
                Card({ id: 8, text: { back: "Bad", front: "悪い" } }),
                Card({ id: 9, text: { back: "Many", front: "多い" } }),
                Card({ id: 10, text: { back: "Few", front: "少し" } })
            ]
        })
    ];


    const categories = ["Numbers", "Colors", "Verbs", "Adjectives"];

    let pages = [];
    let propsList = [];

    categories.forEach((x, i, arr) => {
        propsList.push({ id: i, text: x, isActive: (i === activeId) });
        pages.push(Page({ ...propsList[i], content: data[i] }));
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