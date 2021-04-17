import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPause, faPlay, faBackward, faForward} from '@fortawesome/free-solid-svg-icons'

const Control = ({isPlaying, setIsPlaying, skipSong}) => {
    
    const skipSongButton = ()=> skipSong()
    const setPlaying = () => setIsPlaying()

    return (
        <div className = 'controls'>
            <button className = 'controls_skip' onClick = {() => skipSongButton(false)}>
                <FontAwesomeIcon icon = {faBackward} />
            </button>
            <button className = 'control_play' onClick = {() => setPlaying(isPlaying)}>
                <FontAwesomeIcon icon = {isPlaying ? faPause:faPlay} />
            </button>
            <button className = 'control_skip' onClick = {skipSong(false)}>
                <FontAwesomeIcon icon = {faForward} />
            </button>
        </div>
    )
}

export default Control
