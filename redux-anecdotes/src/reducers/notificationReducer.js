const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'ADD_NOTIFICATION':
            return action.notification
        case 'CLEAR_NOTIFICATION':
            return null
        default:
            return state
    }
}

export const addNotification = (notification, seconds) => {
    return async dispatch => {
        dispatch({
            type: 'ADD_NOTIFICATION',
            notification
        })
        setTimeout(() =>
            dispatch({ type: 'CLEAR_NOTIFICATION' }), seconds * 1000)
    }
}


export default notificationReducer