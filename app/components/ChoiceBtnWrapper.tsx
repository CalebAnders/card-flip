import { ChoiceBtn } from "./ChoiceBtn"

export function ChoiceBtnWrapper() {


  return (


    <div className="choiceBtnWrapper">
    <ChoiceBtn choiceTitle="Higher" />
    <ChoiceBtn choiceTitle="Lower"  />
    <ChoiceBtn choiceTitle="Red" />
    <ChoiceBtn choiceTitle="Black" />

    </div>
    
  )

}