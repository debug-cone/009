import React from 'react'
import { CiLight } from 'react-icons/ci'
import { MdDarkMode } from 'react-icons/md'

function ToggleModeComponent( {darkMode, setDarkMode} ) {
    function handleMode() {
        setDarkMode(!darkMode)
    }

    return (
        <div 
        className='flex items-center justify-center my-3 cursor-pointer'
        onClick={handleMode}
        >
            {darkMode ? <CiLight size={42} /> : <MdDarkMode size={42} />}
        </div>
    )
}

export default ToggleModeComponent