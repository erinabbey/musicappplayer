import React from 'react'

const Detail = ({song}) => {
    return (
        <div className = 'details'>
            <div className = 'details_img'>
                <img  src = {song.img_src} alt = 'song img'/>
            </div>
            <h3 className = 'details_title'>{song.title}</h3>
            <h3 className = 'detail_artist'>{song.artist}</h3>
        </div>
    )
}

export default Detail
