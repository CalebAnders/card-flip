 
import { CardWrapper } from "./CardWrapper";
import { ChoiceBtnWrapper } from "./ChoiceBtnWrapper";
import { ScoreBoard } from "./ScoreBoard";

export function GameBoard() { 

  return (
  <div className="gameBoard">
    <ScoreBoard/>
    <CardWrapper/>
    <ChoiceBtnWrapper/>
  </div>
  )

}