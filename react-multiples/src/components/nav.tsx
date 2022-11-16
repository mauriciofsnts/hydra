import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Navigation: React.FC<Props> = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
