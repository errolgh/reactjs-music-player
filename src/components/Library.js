import React from 'react'
import LibrarySong from './LibrarySong'

export default function Library( {audioRef, setSongs, songs, setCurrentSong, isPlaying}) {
    return (
        <div className="library">
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