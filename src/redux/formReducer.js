import * as ActionType from "./constants"

const initialState = {
    formData: [],
    listSV: [],
    listFilter: [],
    keywords: "",
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SEARCH_FORM_DATA:{
            state.keywords = action.payload;
            return {
               ...state
            }
        }
        case ActionType.ADD_FORM_DATA:
            const array = [...state.listSV];
            array.push(action.payload);
            state.listSV = array;
            return {
                ...state
            }
        case ActionType.DELETE_FORM_DATA:
            const array2 = [...state.listSV];
            const usersFilter = array2.filter(
                (user) => user.masv !== action.payload
              );
              state.listSV = usersFilter;
            return {
                ...state
            }
        case ActionType.EDIT_FORM_DATA:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default formReducer;