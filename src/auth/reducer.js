import {REGISTER_REQUESTED, REGISTER_SUCCESS, REGISTER_FAIL} from  './constants'


const INITIAL_STATE = {
    user: {},
    isLoading: false,
    hasError: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case REGISTER_REQUESTED:
        return{
            ...state,
            isLoading: true
        }
        case REGISTER_SUCCESS:
        return{
            ...state,
            user: action.user,
            isLoading: false,
            hasError: false
        }
        case REGISTER_FAIL:
        return{
            ...state,
            isLoading:false,
            hasError: true
        
        }
        default:
        return state;
    }
}