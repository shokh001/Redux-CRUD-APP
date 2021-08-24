import axios from 'axios';
import * as types from './actionTypes'

const getUsers = (user) => ({
    type: types.GET_USERS,
    payload: user,
});

const userDeleted = () => ({
    type: types.DELETE_USER,
});

const userAdded = () => ({
    type: types.ADD_USER,
});

const getUser = (user) => ({
    type: types.UPDATE_USER,
    payload: user,
});

const userUpdeted = () => ({
    type: types.UPDATE_USER,
});

export const loadUsers = () => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}`)
            .then((res) => {
                // console.log('res', res.data);
                dispatch(getUsers(res.data))
            })
            // .catch((error) => console.log(error));
    }
}

export const deleteUser = (id) => {
    return function (dispatch) {
        axios
            .delete(`${process.env.REACT_APP_API}/${id}`)
            .then((res) => {
                // console.log('res', res);
                dispatch(userDeleted())
                dispatch(loadUsers())
            })
            .catch((error) => console.log(error));
    }
}

export const AddUser = (user) => {
    return function (dispatch) {
        axios
            .post(`${process.env.REACT_APP_API}`, user)
            .then((res) => {
                // console.log('res', res);
                dispatch(userAdded())
                // dispatch(loadUsers())
            })
            .catch((error) => console.log(error));
    }
}

export const getSingleUser = (id) => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}/${id}`)
            .then((res) => {
                // console.log('res', res);
                dispatch(getUser(res.data))
            })
            .catch((error) => console.log(error));
    }
}

export const updateUser = (user, id) => {
    return function (dispatch) {
        axios
            .put(`${process.env.REACT_APP_API}/${id}`, user)
            .then((res) => {
                // console.log('res', res);
                dispatch(userUpdeted())
            })
            .catch((error) => console.log(error));
    }
}
