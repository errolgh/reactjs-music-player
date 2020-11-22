import React from 'react'
import LibrarySong from './LibrarySong'

export default function Library( {libraryStatus, audioRef, setSongs, songs, setCurrentSong, isPlaying}) {
    return ( // multiple interpolations
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs" >
                {songs.map(song => (
                    <LibrarySong
                        id={song.id}
                        key={song.id}
                        song={song} 
                        songs={songs} 
                        setCurrentSong={setCurrentSong}
                        audioRef={audioRef}
                        isPlaying={isPlaying}
                        setSongs={setSongs}
                    />
                ))}
            </div>
        </div>        
    )
}