import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

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

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const unorderedAnecdotes = useSelector(state => {
        return state.anecdotes.filter(a => a.content.includes(state.filter))
    })
    const anecdotes = unorderedAnecdotes.sort((a, b) => (a.votes > b.votes) ? -1 : 1)
    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => {
                        dispatch(voteForAnecdote(anecdote.id))
                        dispatch(addNotification(`Voted for ${anecdote.content}`, 3))
                    }}
                />
            )}
        </div>
    )
}

export default AnecdoteList