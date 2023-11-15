import CurrencySelected from "./components/CurrencySelected";
import CurrencySelection from "./components/CurrencySelection";
import { CurrencyProvider } from "./contexts/CurrencyContext";

function App() {
    return (
        <CurrencyProvider>
            <CurrencySelection />
            <CurrencySelected />
        </CurrencyProvider>
    );
}

export default App;
