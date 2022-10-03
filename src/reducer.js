import { initialState } from "./Form";
import { SET_CATEGORY, SET_CHECK, SET_DESC, SET_NAME, SET_RADIO, SET_SKU, SET_TIME } from "./types";

const reducer = (state = initialState, action) => {

    switch (action.type) {
        
        case SET_NAME:
            return {
                ...state,
                [action.payload.field] : action.payload.value
            }
        case SET_DESC :
            return {
                ...state,
                [action.payload.field] : action.payload.value
            }
        case SET_TIME :
            return {
                ...state,
                [action.payload.field] : action.payload.value
            }
        case SET_SKU :
            return {
                ...state,
                [action.payload.field] : action.payload.value
            }
        case SET_CHECK :
            return {
                ...state,
                [action.payload.field] : action.payload.value
            }
        case SET_CATEGORY :
            return {
                ...state,
                [action.payload.field] : action.payload.value
            }
        case SET_RADIO :
            return {
                ...state,
                [action.payload.field] : action.payload.value
            }
            
        default:
            return initialState
    }


}

export default reducer