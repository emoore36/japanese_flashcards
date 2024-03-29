import { useState } from "react";
import { FrameControl } from '../frames/Frames';
import { Form } from '../forms/Forms';
import './Pages.css';
import logo from '../../static/svg/logo.svg';


function NavLink(props) {
    return (
        <button
            className={props.isActive ? "navlink navlink-active" : "navlink navlink-inactive"}
            id={"navlink_" + props.id} key={props.id}
            onClick={() => props.onClick(props.id)}>
            {props.text}
        </button>
    );
}

function NavBar(props) {

    let navlinks = [];

    // create tabs to tabgroup
    props.list.forEach((x) => {
        navlinks.push(NavLink({ ...x, onClick: props.onClick }));
    });

    return (
        <div className="navbar">
            <a className="logo" href="/"><img width={50} height={50} src={logo} alt="Japanese Flashcards Logo" /></a>
            <ul className="navlinks">{navlinks}</ul>
        </div>
    );

}

function PageControl() {

    const [activeId, setActiveId] = useState(0);

    // populate data
    const data = [
        <FrameControl />,
        <Form obj="card" method='post' ></Form>,
        <Form obj="deck" method='post'></Form>,
        <h3>Coming soon!</h3>
    ];

    const features = ["Vocab Lists", "Create Card", "Create Deck", "Test Yourself"];

    let propsList = [];
    let pages = [];

    features.forEach((feature, feature_index) => {
        propsList.push({ id: feature_index, text: feature, isActive: (feature_index === activeId) });
        pages.push(Page({ ...propsList[feature_index], content: data[feature_index] }));
    })

    return (
        <div className="page-control" id="page_control_0">
            {NavBar({ list: propsList, onClick: setActiveId })}
            {pages}
        </div>
    );

}

function Page(props) {

    return (
        <div className={props.isActive ? "page page-active" : "page page-inactive"} key={props.id} id={"page_" + props.id}>
            <h1>{props.text}</h1>
            {props.content}
        </div>
    );

}

export { PageControl };