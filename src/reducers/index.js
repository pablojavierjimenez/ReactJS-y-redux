const initialState = 0;
const INCREMENTAR = 'CONTADOR/INCREMENTAR';
const DISMINUIR = 'CONTADOR/DISMINUIR';
const SETEAR = 'CONTADOR/SETEAR';

// ACTION CREATORS
export const incrementar = () => ({
    type: INCREMENTAR,
});
export const disminuir = () => ({
    type: DISMINUIR,
});

export const setear = (payload) => ({
    type: SETEAR,
    payload,
});

// REDUCER: deben retornar estados (states) Inmutables
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