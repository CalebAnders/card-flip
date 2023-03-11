export type ButtonValue = "Red" | "Black" | "Higher" | "Lower";

export const SelectChoiceButton: React.FC<{
    value: ButtonValue;
    isSelected: boolean;
    onClick: () => void;
}> = ({ value, isSelected, onClick }) => {
    return (
        <button
            className={isSelected ? "choiceBtn selected " : "choiceBtn"}
            onClick={onClick}
        >
            {value}
        </button>
    );
};
