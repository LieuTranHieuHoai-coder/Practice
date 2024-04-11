import data from './../BookingTickets/danhSachGhe.json';
import * as ActionType from './constants';
const initialState = {
    listSeat : data,
    name: null,
    numberOfSeat : 0,
    price: 0,
    totalPrice: 0,
    selectedSeat: null,
    listSelected: [],
}

const ticketReducer = (state = initialState, action) =>{
    
    switch(action.type){
        case ActionType.GET_NAME:{
            state.name = action.payload;
            return {
               ...state
            }
        }
        case ActionType.GET_SEATS:{
            state.numberOfSeat = action.payload;
            return { ...state}
        }
        case ActionType.ADD:
            {
                console.log(action.payload);
                
                state.listSelected.push(action.payload);
                return {
                   ...state
                }
            }
        default:
            return state;
    }
}

export default ticketReducer;