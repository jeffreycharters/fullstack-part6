import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { voteForAnecdote } from '../reducers/anecdoteReducer'

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
    const unorderedAnecdotes = useSelector(state => state.anecdotes)
    const anecdotes = unorderedAnecdotes.sort((a, b) => (a.votes > b.votes) ? -1 : 1)
    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => dispatch(voteForAnecdote(anecdote.id))}
                />
            )}
        </div>
    )
}

export default AnecdoteList