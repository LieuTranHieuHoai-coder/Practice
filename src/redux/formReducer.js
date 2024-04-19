import * as ActionType from "./constants"

const initialState = {
    formData:[],
    listSV: [],
    listFilter: [],
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_FORM_DATA:
            const array = [...state.listSV];
                
            array.push(action.payload);
            state.listSV = array;
            return {
               ...state
            }
        case ActionType.DELETE_FORM_DATA:
            return {
               ...state,
                listSeat: action.payload
            }
        case ActionType.EDIT_FORM_DATA:
            return {
               ...state,
                formData: action.payload
            }
        default:
            return state;
    }
}

export default formReducer;