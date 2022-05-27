const initialState = 0;

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENTAR':
            return state + 1;
            break;
        case 'DECREMENTAR':
            return state - 1;
            break;
        default:
            return state;
            break;
    }
}