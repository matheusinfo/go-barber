import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

export default reducer => {
    const persistedReducer = persistReducer({
        key: 'gobarber',
        storage,
        whitelist: ['auth', 'user']
    },
        reducer
    );

    return persistedReducer;
}
