import {LIST_GALLERY} from "../constants/actionType";

const initialState = {}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LIST_GALLERY:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}