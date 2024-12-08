import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // will handle routing for our application
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)