import data from './../BookingTickets/danhSachGhe.json';
import * as ActionType from './constants';
const initialState = {
    listSeat : data,
}

const ticketReducer = (state = initialState, action) =>{
    //console.log(state);
    switch(action.type){
        case ActionType.ADD:
            return action.payload;
        default:
            return state;
    }
}

export default ticketReducer;