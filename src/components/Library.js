import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({songs,setCurrentSong,audioRef,useRef,setSongs,libraryStatus})=>{
    return(
        <div className={`library ${libraryStatus? 'active-library':''}`}>
            <h2>Library</h2>
            <div className="libsongs">
                {songs.map((song)=>{
                return < LibrarySong setSongs={setSongs} audioRef={audioRef} useRef={useRef} songs={songs} song={song} id ={song.id} setCurrentSong={setCurrentSong}/>
                })}
            </div>

        </div>
    );
}

export default Library;