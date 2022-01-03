import * as types from './actionTypes';


const initialState = {
    loading: false,
    basket: [],
    user: null,
    error: null
};

// We are only using a single reducer function, it would be relatively easy to set up
// a custom reducer function for each type of state (Login, Register, Logout, etc.)
// They would just need to be combined in root-reducer.js.

// NOTE: This would have implications on the way we use useSelector as all state 
//       objects would no longer be available under state.data generically...




const basketReducer = (state = initialState, action) => {

    // let newBasket = [];
    
    switch(action.type){

        case types.REGISTER_START:
        case types.LOGIN_START:
        case types.LOGOUT_START:
            return{
                ...state,
                loading:true,
            };

        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                user: action.payload
            };

        case types.REGISTER_FAIL:
        case types.LOGIN_FAIL:
        case types.LOGOUT_FAIL:
            return{
                ...state,
                loading:false,
                error: action.payload
            };

        case types.SET_USER:
            return{
                ...state,
                user: action.payload,
            };

        case types.LOGOUT_SUCCESS:
            return{
                ...state,
                user: null,
            };

        case types.ADD_TO_BASKET:
            const newBasket = [...state.basket, action.payload];
            return{
                ...state,
                basket: newBasket,
            };

        case types.REMOVE_FROM_BASKET:
            const updatedBasket = [...state.basket];
            const index = state.basket.findIndex((item => item.uuid === action.payload))
            updatedBasket.splice(index, 1);
            return{
                ...state, 
                basket: updatedBasket,
            };

        case types.CLEAR_BASKET:
            return{
                ...state,
                basket: [],
            };

        default:
            return state;
    }
}

export default basketReducer;