import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) => {
    const object = { content, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const voteForAnecdote = async (id) => {
    const anecdoteToVote = await axios.get(`${baseUrl}/${id}`)
    anecdoteToVote.data.votes += 1
    const response = await axios.put(`${baseUrl}/${id}`, anecdoteToVote.data)
    return response.data
}

export default { getAll, createNew, voteForAnecdote }