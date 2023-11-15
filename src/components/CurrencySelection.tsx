import { ChangeEvent, useContext } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";

type currency = {
    currency: string;
    value: string;
};

const CurrencySelection = () => {
    const currencies: currency[] = [
        {
            currency: "CAD",
            value: "CAD",
        },
        {
            currency: "USD",
            value: "USD",
        },
    ];

    const { currentCurrency, setCurrency } = useContext(CurrencyContext);

    const onChnage = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target?.value !== currentCurrency) {
            setCurrency(e.target?.value);
        }
    };

    return (
        <div>
            <h1>Please select your currency.</h1>
            <select onChange={onChnage}>
                {currencies.map((cu, i) => {
                    return (
                        <option
                            key={i}
                            value={cu.currency}
                            selected={
                                currentCurrency === cu.currency ? true : false
                            }
                        >
                            {cu.value}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default CurrencySelection;
