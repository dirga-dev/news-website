import React, { useState } from 'react'
import SaveIco from '.././assets/archive-add.svg'

function SidebarRight(props) {
  const [inputText, setInputText] = useState("")
  let inputhandler = (e) => {
    if(e.key === 'Enter'){
      var lowerCase = e.target.value.toLowerCase()
      setInputText(lowerCase)
      e.target.value = ''
    }
  }

  console.log(inputText)

  return (
      <div className='sidebar-right'>
        <div className='sidebar-right-content'>
          <div className='sidebar-content-search'>
            <input 
              type="text" 
              value={props.value}
              onChange={(event) => props.setSearchValue(event.target.value)}
              placeholder='Type to search...'
              onKeyDown={inputhandler}></input>
          </div>
          <div className='sidebar-content-click-me'>
            <img src={SaveIco} alt="Click me"/> Click Save! to add news to your reading list
          </div>
        </div>
      </div>
  )
}

export default SidebarRight
