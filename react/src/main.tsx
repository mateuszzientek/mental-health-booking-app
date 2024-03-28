import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"
import { Provider } from 'react-redux'
import { store } from './state/store'
import { ErrorBoundary } from "react-error-boundary";
import Home from './views/Home'

ReactDOM.createRoot(document.getElementById('root')!).render(

    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>

)
