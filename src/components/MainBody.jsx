import React from 'react'
import PillButton from './PillButton'

function MainBody() {
  return (
    <div className='mt-4'>
        <header>
        <PillButton content="All" active={true}/>
        <PillButton content="Beverage"/>
        <PillButton content="Snacks"/>
        </header>
    </div>
  )
}

export default MainBody