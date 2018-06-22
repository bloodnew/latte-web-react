import {LIST_EVENT} from "../constants/actionType";

const initialState = {}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LIST_EVENT:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}
