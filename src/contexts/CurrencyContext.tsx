import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
} from "react";

type CurrencyContextType = {
    currentCurrency: string;
    setCurrency: Dispatch<SetStateAction<string>>;
};

export const CurrencyContext = createContext<CurrencyContextType>({
    currentCurrency: "CAD",
    setCurrency: () => {},
});

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
    const [currentCurrency, setCurrency] = useState("CAD");

    const value = { currentCurrency, setCurrency };

    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    );
};
