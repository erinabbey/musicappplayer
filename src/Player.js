import React, { useRef , useEffect, useState} from 'react'
import Control from './Control'
import Detail from './Detail'

const Player = ({currentSongIndex, setCurrentSongIndex, nextSongIndex, songs}) => {
    const audioElement = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)


    useEffect(() => {
        if(isPlaying){
            audioElement.current.play()
        }else{
            audioElement.current.pause()
        }
    })


    /*
    - 
    */
    const skipSong  = (forward = true) =>{
        if(forward){
            setCurrentSongIndex(()=>{
            let temp = currentSongIndex;
            temp++

            if(temp > songs.length - 1 ){
                temp = 0
            }
            return temp
        })
        }else{
            setCurrentSongIndex(() =>{
                let temp = currentSongIndex
                temp--
                if(temp < 0) {
                    temp = songs.length - 1
                }
                return temp
            })
        }
    }
    
    return (
        <div className = 'player'>
            <h3>Playing now</h3>
            <Detail song ={ songs[currentSongIndex]} />
            <Control 
            isPlaying = {isPlaying}
            setIsPlaying = {setIsPlaying}
            shipSong = {skipSong}
            />
            <audio
                className = 'player_audio'
                src = {songs[currentSongIndex].src} 
                ref = {audioElement}
                control          
            >
            </audio>
            <p>
                Next up:
                <span>
                    {songs[nextSongIndex].title} by {' '}
                    {songs[nextSongIndex].artist}
                </span>
            </p>
            
        </div>
    )
}

export default Player
