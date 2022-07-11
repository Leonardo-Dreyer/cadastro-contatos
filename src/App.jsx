import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import Routers from './Routers';
import Globals from './config/styles/Globals';
import { store, persistor } from './store';
import ThemeDefault from './config/styles/themes/Default';


export default function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ThemeProvider theme={ThemeDefault}>
                    <Globals/>
                    <Routers/>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}