type CardProps = {
    cardNumber?: number;
    cardColor?: string;
    showCardBack: boolean;
    isClickable: boolean;
    img?: string;
    onClick?: () => void;
};

function getCardColor(cardColor?: string) {
    return cardColor == "black" ? "black" : "red";
}

export function Card({
    cardNumber,
    cardColor,
    showCardBack,
    isClickable,
    img,
    onClick,
}: CardProps) {
    return (
        <div
            className={"cardComponent"}
            style={
                !showCardBack
                    ? { backgroundColor: getCardColor(cardColor) }
                    : undefined
            }
            onClick={isClickable ? onClick : undefined}
        >
            {showCardBack ? (
                <img alt={"back of card"} src={img} />
            ) : (
                <div className="cardNumber">{cardNumber}</div>
            )}
        </div>
    );
}
