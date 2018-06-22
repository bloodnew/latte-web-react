import {LIST_ARTICLE} from "../constants/actionType";

const initialState = {}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LIST_ARTICLE:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }

}