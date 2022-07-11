import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
    return persistReducer(
        {
            key: 'aula_29_growdev_react',
            storage,
            whitelist: ['contacts']
        },
        reducers
    );
};