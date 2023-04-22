import { useEffect, useState } from "react";
import { Card, Deck } from '../cards/Cards';
import './Frames.css';

function Tab(props) {
    return (
        <button
            className={props.isActive ? "tab tab-active" : "tab tab-inactive"}
            id={"tab_" + props.id}
            key={props.id}
            onClick={() => props.onClick(props.id)}
        >
            {props.text}
        </button>
    );
}

function FrameControl() {
    const [data, setData] = useState([]);
    const [activeId, setActiveId] = useState(data.length ? data[0].id : 0);
    const [frames, setFrames] = useState([]);
    const [cardsFlipped, setCardsFlipped] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/decks/');
                const dto = await response.json();
                const jsonData = await dto['data'];

                setData(jsonData);

                const frameData = jsonData.map((deck) => {
                    const frameProps = {
                        id: deck.id,
                        text: deck.name,
                        isActive: (deck.id === activeId),
                        onClick: setActiveId
                    };
                    const cards = mapCardsToComponents(deck.cards, flipCard, cardsFlipped);
                    const frameContent = Deck({ id: `frame_${deck.id}`, name: deck.name, cards });
                    return { frameProps, frameContent };
                });

                if (activeId === 0) {
                    setActiveId(jsonData[0].id);
                }

                setFrames(frameData);

            } catch (err) {
                console.error("Eric totally fucked up! Here's the error:", err);
            }

        };

        fetchData();



    }, [activeId, cardsFlipped]);

    const flipCard = (cardId) => {
        setCardsFlipped((prevCardsFlipped) => ({
            ...prevCardsFlipped,
            [cardId]: !prevCardsFlipped[cardId],
        }));
    }

    return (
        <div className="frame-control" id="frame_control_0">
            <ul className="tab-group">
                {frames.map(({ frameProps }) => (
                    <Tab
                        key={frameProps.id}
                        id={frameProps.id}
                        text={frameProps.text}
                        isActive={frameProps.isActive}
                        onClick={setActiveId}
                    />
                ))}
            </ul>
            {frames.map(({ frameProps, frameContent }) => (
                <Frame
                    key={frameProps.id}
                    id={frameProps.id}
                    text={frameProps.text}
                    isActive={frameProps.isActive}
                    content={frameContent}
                />
            ))}
        </div>
    );
}

function Frame(props) {
    return (
        <div
            className={props.isActive ? "frame frame-active" : "frame frame-inactive"}
            key={props.id}
            id={"frame_" + props.id}
        >
            <h2>{props.text}</h2>
            {props.content}
        </div>
    );
}

function mapCardsToComponents(cards, flipCard, cardsFlipped) {
    return cards.map((card) => {
        return Card({
            id: card.id,
            text: {
                front: card.front_text,
                back: card.back_text
            },
            deck_id: card.deck_id,
            flipped: cardsFlipped[card.id] || false,
            flipCard: () => flipCard(card.id)
        })
    });
}

export { FrameControl };
