import { DELETE, ADD, EDIT } from './constants';

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

export { actDelete, actAdd, actEdit };