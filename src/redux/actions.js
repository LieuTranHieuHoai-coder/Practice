import { DELETE, ADD, EDIT, GET_NAME, GET_SEATS, CONFIRM } from './constants';
//form validation
import { DELETE_FORM_DATA, ADD_FORM_DATA, EDIT_FORM_DATA, SEARCH_FORM_DATA } from './constants';
const actDelete = (data) => {
    return {
        type: DELETE,
        payload: data
    };
};

const actAdd = (data) => {
    return {
        type: ADD,
        payload: data
    };
}

const actEdit = (data) => {
    return {
        type: EDIT,
        payload: data
    };
}

const actGetName = (data) => {
    return {
        type: GET_NAME,
        payload: data
    };
};

const actGetSeats = (data) => {
    return {
        type: GET_SEATS,
        payload: data
    };
};

const actConfirm = () => {
    return {
        type: CONFIRM,
        payload: null
    };
}

const actDeleteForm = (data) => {
    return {
        type: DELETE_FORM_DATA,
        payload: data
    };
};

const actAddForm = (data) => {
    return {
        type: ADD_FORM_DATA,
        payload: data
    };
}

const actEditForm = (data) => {
    return {
        type: EDIT_FORM_DATA,
        payload: data
    };
}

const actSearchForm = (data) => {
    return {
        type: SEARCH_FORM_DATA,
        payload: data
    };
}

export { 
    actDelete, 
    actAdd, 
    actEdit, 
    actGetName, 
    actGetSeats, 
    actConfirm, 
    actDeleteForm, 
    actAddForm, 
    actEditForm, 
    actSearchForm 
};