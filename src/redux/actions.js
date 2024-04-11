import { DELETE, ADD, EDIT , GET_NAME, GET_SEATS} from './constants';

const actDelete = (id) => {
    return {
        type: DELETE,
        payload: id
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
export { actDelete, actAdd, actEdit, actGetName, actGetSeats };