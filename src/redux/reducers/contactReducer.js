import * as types from '../actionTypes'

const initialState = {
    users: [],
    user: {},
    loading: true
};

const contactReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_USERS:
            return {
                ...state,
                users: payload,
                loading: false
            };
        case types.GET_SINGLE_USER:
            return {
                ...state,
                user: payload,
                loading: false
            };

        case types.DELETE_USER:
        case types.ADD_USER:
        case types.UPDATE_USER:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default contactReducer;