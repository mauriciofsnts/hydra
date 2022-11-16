import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

type Props = {}

const Bootstrap: React.FC<Props> = () => {
  return (
    <BrowserRouter basename='react-multiples'>
      <App />
    </BrowserRouter>
  )
}

export default Bootstrap
