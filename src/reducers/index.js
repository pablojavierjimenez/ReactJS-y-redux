const initialState = 0;
const INCREMENTAR = 'CONTADOR/INCREMENTAR';
const DISMINUIR = 'CONTADOR/DISMINUIR';
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENTAR:
            return state + 1;
            break;
        case DISMINUIR:
            return state - 1;
            break;
        default:
            return state;
            break;
    }
}