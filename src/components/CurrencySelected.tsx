import { useContext } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";

const CurrencySelected = () => {
    const { currentCurrency } = useContext(CurrencyContext);
    return (
        <h1 className="dark:text-white">
            Selected currency: {currentCurrency}
        </h1>
    );
};

export default CurrencySelected;
