import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const LayoutClient = (props: Props) => {
  return (
    <div>
      <div>LayoutClient</div>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default LayoutClient
