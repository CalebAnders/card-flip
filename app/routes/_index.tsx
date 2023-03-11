import { Client } from "boardgame.io/react";
import { TicTacToe } from "~/src/tic-tac-toe";
// import Game from "~/src/Game";
const Game = Client({ game: TicTacToe });

export default function CardFlip() {
    return <Game></Game>;
}
