import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

import { useSelector } from 'react-redux'

const App = () => {

  const message = useSelector(state => state.notifications)
  return (
    <div>
      {message === null
        ? '' : <Notification />
      }
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div >
  )
}

export default App