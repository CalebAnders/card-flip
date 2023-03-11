/* eslint-disable jsx-a11y/alt-text */
import { useActionData } from "@remix-run/react";

import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";
import { buildDeck } from "~/models/deck";

export const loader = async () => {
    const deck = buildDeck();

    return json({ deck });
};

export default function CardFlip() {
    const data = useLoaderData<typeof loader>();

    return (
        <div>
            <h1>Welcome to card flip!</h1>
            {data.deck.map((card) => (
                <div key={card.number}>
                    {card.color}
                    {""}
                    {card.number}
                    <img alt="card back" src={card.backImg} width={"150px"} />
                </div>
            ))}
        </div>
    );
}
