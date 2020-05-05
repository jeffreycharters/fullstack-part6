import React from 'react'
import { useDispatch } from 'react-redux'
import { changeFilter } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()

    const newFilter = (event) => {
        event.preventDefault()
        const filterText = event.target.value
        dispatch(changeFilter(filterText))
    }

    return (
        <div>
            Filter by:
            <input
                type="text"
                onChange={newFilter}
            />
        </div>
    )
}

export default Filter