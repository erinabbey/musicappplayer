import React, {useState, useEffect} from 'react-dom'
import Player from './Player'
import './App.css'

function App() {
  const [songs] = useState([
    {
      title: "BOOMBAYAH",
      artist: "BLACKPINK",
      img_src: "./img/pinter3.jpg",
      src: "./songs/BOOMBAYAH-BLACKPINK.mp3"
    },
    {
      title: "Playing with fire",
      artist: "BLACKPINK",
      img_src: "./img/pinter3.jpg",
      src: "./songs/Playing-With-Fire-BlackPink-BlackPink.mp3"
    },
    {
      title: "Stay",
      artist: "BLACKPINK",
      img_src: "./img/pinter3.jpg",
      src: "./songs/Stay-BlackPink-BlackPink.mp3"
    }
  ])

  const [currentSongIndex, setcurrentSongIndex] = useState(0)
  const [nextSongIndex, setnextSongIndex] = useState(0)
  

  // currentSongIndex bắt đầu ừ 0, 
  /*
  - nếu đã chạy hết list bài hát thì trở bài đầu tiên
  - nếu chưa chạy hết list thì chạy đến bài tiếp theo
  - đương nhiên giá trị 0 là đã chứa 1 bài hát rồi
  - nên kiểm tra xem index tiếp theo có thỏa mãn không
  - giá trị phụ thuộc vào index hiện tại và song.length
  */
  useEffect(() => {
  setnextSongIndex(() =>{
    if(currentSongIndex + 1 > songs.length - 1){
     return 0
    }
    else{
      return currentSongIndex + 1
    }
  })
  
  }, [currentSongIndex, songs.length])


  return (
    <div className = 'music_app'>
      <Player 
        currentSongIndex = {currentSongIndex}
        setcurrentSongIndex = {setcurrentSongIndex}
        nextSongIndex = {nextSongIndex}
        songs = {songs}
      />

    </div>

  );
}

export default App;
