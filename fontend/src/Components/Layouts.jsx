import React from 'react'
import { Footers } from './Footers'
import {Headers} from './Headers'
import {Outlet} from 'react-router-dom'

export const Layouts = () => {
  return (
    <div>
      <Headers/>
        <Outlet/>
      <Footers/>
    </div>
  )
}
