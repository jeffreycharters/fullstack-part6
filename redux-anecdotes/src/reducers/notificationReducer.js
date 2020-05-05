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

export const addNotification = notification => {
    return {
        type: 'ADD_NOTIFICATION',
        notification
    }
}

export const clearNotification = () => {
    return {
        type: 'CLEAR_NOTIFICATION'
    }
}

export default notificationReducer