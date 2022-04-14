import "./styles/App.scss"
import React,{useRef, useState} from "react";
import Nav from "./components/Nav";
import Song from "./components/Song";
import Player from "./components/Player";
import data from "./SongsCollection";
import Library from "./components/Library";

function App() {
  const audioRef = useRef(null);
  const [songs,setSongs] = useState(data());
  const [currentsong,setCurrentSong] = useState(songs[6]);
  const [isplaying,setIsPlaying] =useState(false);
  const [libraryStatus,setLibraryStatus] = useState(false);
  return (
    <div className="App">
     
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      < Song currentSong = {currentsong}/>
      < Player setSongs={setSongs} songs= {songs} setCurrentSong={setCurrentSong} audioRef={audioRef} useRef={useRef} isplaying = {isplaying} setIsPlaying = {setIsPlaying} currentSong = {currentsong} />
      < Library libraryStatus={libraryStatus} setSongs={setSongs} audioRef={audioRef} useRef={useRef} songs ={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

// commits

export default App;
