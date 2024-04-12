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
                
                const array = [...state.listSelected];
                
                const index = array.findIndex((item) => item.soGhe === action.payload.soGhe);
                if(index !== -1){
                    //array.filter((item) => item.soGhe !== action.payload.soGhe);    
                    array.splice(index, 1 );
                }
                else{
                    action.payload.daDat = true;
                    array.push(action.payload);
                }
                state.listSelected = array;
                
                return {
                   ...state
                }
            }
        case ActionType.CONFIRM:{
            const array = [...state.listSeat];
            state.listSelected.map((item) => {
                
            })
            const index = array.findIndex((item) => item.soGhe === action.payload.soGhe);
            if(index !== -1){
                array[index].danhSachGhe.daDat = action.payload.daDat;
                state.listSeat = array;
            }
            return {
               ...state
            }
        }

        default:
            return state;
    }
}

export default ticketReducer;