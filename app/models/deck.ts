import cards from "../data/cards";

export type Card = {
    number: number;
    color: string;
    backImg: string;
};

export function buildDeck() {
    return cards as Card[];
}
