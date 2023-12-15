import React from 'react'

const Main = () => {

    function handleSearch(e) {
        e.preventDefault()
        alert('Searching...');
    }



  return (
    <div className='main'>
          <input 
            type="text" 
            placeholder="Search" 
          />
        <button id='submit-btn' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Main