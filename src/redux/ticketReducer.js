import data from './../BookingTickets/danhSachGhe.json';
import * as ActionType from './constants';
const initialState = {
    listSeat : data,
    name: null,
    numberOfSeat : 0,
    price: 0,
    totalPrice: 0,
    selectedSeat: null,
    listSelected: null,
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