import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/nav'

type Props = {}

const AppLayout: React.FC<Props> = () => {
  return (
    <div>
      <Navigation />

      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout
