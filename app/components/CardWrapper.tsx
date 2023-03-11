import { Card } from "./Card";

export function CardWrapper() {

//delete this!!
  const colors = ['red', 'black'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const numArr = [...Array(13).keys()];;

  const randomNumber = numArr[Math.floor(Math.random() * numArr.length +1 )];



  return (

<div className="cardWrapper">
    <Card 
     randomNumber={randomNumber}
     randomColor={randomColor}
    />
    <Card  
     randomNumber={randomNumber}
     randomColor={randomColor}
    />

    
    </div>
  )


}