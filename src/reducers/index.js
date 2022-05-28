const initialState = 0;
const INCREMENTAR = 'CONTADOR/INCREMENTAR';
const DISMINUIR = 'CONTADOR/DISMINUIR';
const SETEAR = 'CONTADOR/SETEAR';

// ACTION CREATORS
const incrementar = () => ({
    type: INCREMENTAR,
});
const disminuir = () => ({
    type: DISMINUIR,
});

const setear = (payload) => ({
    type: DISMINUIR,
    payload,
});

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENTAR:
            return state + 1;
            break;
        case DISMINUIR:
            return state - 1;
            break;
        case SETEAR: 
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}