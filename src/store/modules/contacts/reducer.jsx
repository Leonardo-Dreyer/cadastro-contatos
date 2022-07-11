const initialValue = [];

export default function contacts(state = initialValue, { type, payload }) {
    
    switch (type) {
        case 'contacts/getAll':
            return state;
        case 'contacts/post':
            return state = [...state, payload];
        case 'contacts/delete':
            state.splice(payload, 1) 
            return state = [...state]
        default:
            return initialValue;
    }
};