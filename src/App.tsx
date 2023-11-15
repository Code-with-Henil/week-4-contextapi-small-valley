import CurrencySelected from "./components/CurrencySelected";
import CurrencySelection from "./components/CurrencySelection";
import ThemeToggle from "./components/ThemeToggle";
import { CurrencyProvider } from "./contexts/CurrencyContext";

function App() {
    return (
        <CurrencyProvider>
            <ThemeToggle />
            <CurrencySelection />
            <CurrencySelected />
        </CurrencyProvider>
    );
}

export default App;
