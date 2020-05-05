import React from 'react'
import { connect } from 'react-redux'
import { changeFilter } from '../reducers/filterReducer'

const Filter = (props) => {

    const newFilter = (event) => {
        event.preventDefault()
        const filterText = event.target.value
        props.changeFilter(filterText)
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

const mapDispatchToProps = {
    changeFilter,
}

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)

export default ConnectedFilter