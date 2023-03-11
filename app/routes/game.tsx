import type { LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { buildDeck } from "~/models/deck";
import { Card } from "~/components/Card";
import type { ButtonValue } from "~/components/Button";
import { SelectChoiceButton } from "~/components/Button";
import { useState, useEffect } from "react";

import stylesUrl from "~/styles/game.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl }];
};

export const loader = async () => {
    const deck = buildDeck();

    return json({ deck });
};

export default function CardFlip() {
    const data = useLoaderData<typeof loader>();

    const [currentSelection, setCurrentSelection] =
        useState<ButtonValue | null>(null);
    const [score, setScore] = useState(0);
    const [cardsRemaining, setCardsRemaining] = useState<number>(
        data.deck.length
    );
    const [currentCard, setCurrentCard] = useState<number>(
        Math.floor(Math.random() * data.deck.length)
    );
    const [nextCard, setNextCard] = useState<number>(currentCard);
    const [isCardClickable, setIsCardClickable] = useState<boolean>(false);

    const handleCardClick = () => {
        console.log("card clicked");
        setCurrentSelection(null);
        setIsCardClickable(false);
        if (cardsRemaining > 0) {
            const randomNumber = Math.floor(Math.random() * cardsRemaining);
            setNextCard(randomNumber);

            // Stuff for loging. There's currently a bug where on the first click, the next card is the same as the current card or something like that so you have to play around before it starts.
            // console.log("current selection is:", currentSelection);
            // console.log("next color is: ", data.deck[nextCard].color);
            // console.log("next number is: ", data.deck[nextCard].number);

            const flippedCard = data.deck[currentCard];

            if (
                currentSelection?.toLocaleLowerCase() ===
                data.deck[nextCard].color
            ) {
                setScore((prevScore) => prevScore + 1);
            } else if (
                currentSelection === "Higher" &&
                flippedCard.number < data.deck[nextCard].number
            ) {
                setScore((prevScore) => prevScore + 1);
            } else if (
                currentSelection === "Lower" &&
                flippedCard.number > data.deck[nextCard].number
            ) {
                setScore((prevScore) => prevScore + 1);
            }

            setCurrentCard(nextCard);
            return setCardsRemaining(cardsRemaining - 1);
        }
    };

    const handleButtonClick = (value: ButtonValue) => {
        setCurrentSelection((prevSelection) => {
            if (prevSelection === value) {
                setIsCardClickable(false);

                console.log("card is no longer clickable");
                return null; // deselect if same button is clicked again
            }
            console.log("card is clickable");
            setIsCardClickable(true);

            return value;
        });
    };

    return (
        <div className="gameBoard">
            <div className="scoreBoard">
                {cardsRemaining === 0 ? (
                    <h1>Final Score: {score}</h1>
                ) : (
                    <h1>Score: {score}</h1>
                )}
            </div>
            <div className="cardWrapper">
                <Card
                    img={data.deck[0].backImg}
                    onClick={handleCardClick}
                    showCardBack={true}
                    isClickable={isCardClickable}
                />
                <Card
                    cardNumber={data.deck[currentCard].number}
                    cardColor={data.deck[currentCard].color}
                    showCardBack={false}
                    isClickable={false}
                />
            </div>
            <div
                style={{
                    display: "flex",
                    flexBasis: "100%",
                    width: "300px",
                    height: "60px",
                    position: "relative",
                    justifyContent: "center",
                    textAlign: "center",
                    margin: "auto",
                }}
            >
                <h2 style={{ color: "white" }}>
                    Your Selection: {currentSelection ?? ""}
                </h2>
            </div>

            <div className="choiceBtnWrapper">
                <SelectChoiceButton
                    value="Higher"
                    onClick={() => handleButtonClick("Higher")}
                    isSelected={currentSelection === "Higher"}
                />
                <SelectChoiceButton
                    value="Lower"
                    onClick={() => handleButtonClick("Lower")}
                    isSelected={currentSelection === "Lower"}
                />
                <SelectChoiceButton
                    value="Red"
                    onClick={() => handleButtonClick("Red")}
                    isSelected={currentSelection === "Red"}
                />
                <SelectChoiceButton
                    value="Black"
                    onClick={() => handleButtonClick("Black")}
                    isSelected={currentSelection === "Black"}
                />
            </div>
        </div>
    );
}
