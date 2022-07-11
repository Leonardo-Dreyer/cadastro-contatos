export function getAll() {
    return {
        type: 'contacts/getAll'
    };
}

export function post(payload) {
    return {
        type: 'contacts/post',
        payload
    };
}

export function deleteOne(payload) {
    return {
        type: 'contacts/delete',
        payload
    };
}