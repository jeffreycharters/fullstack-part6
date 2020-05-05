import React from 'react'
import { connect } from 'react-redux'

import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { addNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <div>
            <div>{anecdote.content}</div>
            <div>
                has {anecdote.votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}

const Anecdotes = (props) => {
    // const dispatch = useDispatch()

    return (
        <div>
            <h2>Anecdotes</h2>
            {props.anecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => {
                        props.voteForAnecdote(anecdote.id)
                        props.addNotification(`Voted for ${anecdote.content}`, 2)
                    }}
                />
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    const unorderedAnecdotes = state.anecdotes.filter(a => a.content.includes(state.filter))
    const anecdotes = unorderedAnecdotes.sort((a, b) => (a.votes > b.votes) ? -1 : 1)
    return {
        anecdotes,
        filter: state.filter
    }
}

const mapDispatchToProps = {
    voteForAnecdote,
    addNotification
}

const connectedAnecdotes = connect(
    mapStateToProps,
    mapDispatchToProps)(Anecdotes)
export default connectedAnecdotes