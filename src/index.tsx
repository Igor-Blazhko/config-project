import { createRoot } from 'react-dom/client';
import { App } from './test';

const rootE = document.getElementById("root");

if (rootE) {
    const root = createRoot(rootE);

    root.render(<App />)

}
