let timerID

const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'ADD_NOTIFICATION':
            clearTimeout(timerID)
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
        timerID = setTimeout(() =>
            dispatch({ type: 'CLEAR_NOTIFICATION' }), seconds * 1000)
    }
}


export default notificationReducer