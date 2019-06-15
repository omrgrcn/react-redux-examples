import axios from 'axios';

export const UPDATE_USER = 'UPDATE_USER';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export function updateUser(newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}

export function getUsers() {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/users/5')
            .then(response => dispatch(updateUser(response.data.name)))
            .catch(error => dispatch(showError()))
    }
}

export function showError() {
    return {
        type: GET_USER_ERROR,
        payload: {
            error: 'ERROR !'
        }
    }
}