import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
    const initialState = {
        good: 1,
        ok: 2,
        bad: 3
    }

    test('should return a proper initial state when called with undefined state', () => {
        const state = {}
        const action = {
            type: 'DO_NOTHING'
        }

        const newState = counterReducer(undefined, action)
        expect(newState).toEqual(initialState)
    })

    test('good is incremented', () => {
        const action = {
            type: 'GOOD'
        }
        const state = initialState

        deepFreeze(state)
        const newState = counterReducer(state, action)
        expect(newState).toEqual({
            good: 2,
            ok: 2,
            bad: 3
        })
    })

    test('ok is incremented', () => {
        const action = {
            type: 'OK'
        }
        const state = initialState

        deepFreeze(state)
        const newState = counterReducer(state, action)
        expect(newState).toEqual({
            good: 1,
            ok: 3,
            bad: 3
        })
    })

    test('bad is incremented', () => {
        const action = {
            type: 'BAD'
        }
        const state = initialState

        deepFreeze(state)
        const newState = counterReducer(state, action)
        expect(newState).toEqual({
            good: 1,
            ok: 2,
            bad: 4
        })
    })

    test('zero sets all ratings to zero', () => {
        const action = {
            type: 'ZERO'
        }

        const state = initialState

        deepFreeze(state)
        const newState = counterReducer(state, action)
        expect(newState).toEqual({
            good: 0,
            ok: 0,
            bad: 0
        })
    })
})