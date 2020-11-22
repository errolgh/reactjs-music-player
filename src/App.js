import { useState, useRef } from 'react'
import Player from "./components/Player"
import Song from "./components/Song"
import './styles/app.scss'
import data from './data'
import Library from './components/Library'
import Nav from './components/Nav'

function App() {
  const [ songs, setSongs ] = useState(data())  //you have to invoke the exported function
  const [ currentSong, setCurrentSong ] = useState( songs[0] )
  const [ isPlaying, setIsPlaying ] = useState(false)
  const [ songInfo, setSongInfo ] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0
})
const [ libraryStatus, setLibraryStatus ] = useState(false)

  const audioRef = useRef(null)

  

  
  const timeUpdateHandler = e => {
    const current = e.target.currentTime
    const duration = e.target.duration
    //calculate percentage
    const roundedCurrent = Math.round(current)
    const roundedDuration = Math.round(duration)
    const animation = Math.round((roundedCurrent / roundedDuration)*100)
    console.log(animation)
    setSongInfo( { ...songInfo, currentTime: current, duration, animationPercentage: animation } )
}


  const songEndHandler = () => {
    let currentIndex = songs.findIndex(song => song.id === currentSong.id)
    setCurrentSong(songs[(currentIndex + 1) % songs.length])
      if(isPlaying) audioRef.current.play()
  }


  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={ currentSong } />
      <Player 
        songs={songs}
        setSongs={setSongs}
        audioRef={audioRef} 
        currentSong={ currentSong } 
        setCurrentSong={ setCurrentSong } 
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        isPlaying={ isPlaying }
        setIsPlaying={ setIsPlaying }
        timeUpdateHandler={timeUpdateHandler}
      />
      <Library
        audioRef={audioRef}
        songs={ songs } 
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        ref={audioRef} 
        onLoadedMetadata={timeUpdateHandler}
        src={ currentSong.audio }
        onTimeUpdate={timeUpdateHandler}
        onEnded={songEndHandler}
      />
    </div>
  );
}

export default App;


// 17. Library Toggle 6:40