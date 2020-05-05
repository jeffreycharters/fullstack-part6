const notificationReducer = (state = 'No message, sorry.', action) => {
    switch (action.type) {
        case 'ADD_NOTIFICATION':
            return action.notification
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

export default notificationReducer