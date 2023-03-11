import { Client } from "boardgame.io/react";
import { TicTacToe } from "~/src/tic-tac-toe";
import { GameBoard } from "~/components/GameBoard";

// import Game from "~/src/Game";
const Game = Client({ game: TicTacToe, board: GameBoard });

export default function CardFlip() {
    return  ( <Game>


    </Game>);
}
