import { DELETE, ADD, EDIT , GET_NAME, GET_SEATS, CONFIRM} from './constants';

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
export { actDelete, actAdd, actEdit, actGetName, actGetSeats, actConfirm };