export function Card(props: { randomNumber: number,randomColor: string }) {





  

   return (
    <div className="cardComponent">
    <div className="cardNumber">{props.randomNumber}</div>
    <div className="cardColor">{props.randomColor}</div>
    </div>
   )

}