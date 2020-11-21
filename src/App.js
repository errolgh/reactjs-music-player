import { useState, useRef } from 'react'
import Player from "./components/Player"
import Song from "./components/Song"
import './styles/app.scss'
import data from './util'
import Library from './components/Library'
import Nav from './components/Nav'

function App() {
  const [ songs, setSongs ] = useState(data())  //you have to invoke the exported function
  const [ currentSong, setCurrentSong ] = useState( songs[0] )
  const [ isPlaying, setIsPlaying ] = useState(false)
  const [ songInfo, setSongInfo ] = useState({
    currentTime: 0,
    duration: 0,
})

  const audioRef = useRef(null)

  

  
  const timeUpdateHandler = e => {
    const current = e.target.currentTime
    const duration = e.target.duration
    setSongInfo( { ...songInfo, currentTime: current, duration } )
}


  return (
    <div className="App">
      <Nav />
      <Song currentSong={ currentSong } />
      <Player 
        audioRef={audioRef} 
        currentSong={ currentSong } 
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
      />
      <audio
        ref={audioRef} 
        onLoadedMetadata={timeUpdateHandler}
        src={ currentSong.audio }
        onTimeUpdate={timeUpdateHandler}
      />
    </div>
  );
}

export default App;


// 17. Library Toggle 6:40