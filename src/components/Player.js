import React,{useRef,useState,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay,faAngleLeft,faAngleRight,faPause} from '@fortawesome/free-solid-svg-icons'

const Player = ({currentSong,isplaying,setIsPlaying,setCurrentSong,songs,setSongs}) =>{
    const audioRef = useRef(null);
    const playSong =()=>{
        if(isplaying){
            audioRef.current.pause()
            setIsPlaying(!isplaying)
            currentSong.active =false;
            
        }
        else{
            audioRef.current.play()
            setIsPlaying(!isplaying)
            currentSong.active = true;
        }
        
    }
    const timeUpdate = (e) =>{
    let seconds = e.target.currentTime;
    let secondss = e.target.currentTime
    let minutes = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    let  time = minutes + ":" + seconds;
    

    let Dseconds =  e.target.duration;
    let Dminutes = Math.floor(Dseconds / 60);
    let Ddminutes = (Dseconds / 60);
    Dminutes = (Dminutes >= 10) ? Dminutes : "0" + Dminutes;
    Dseconds = Math.floor(Dseconds % 60);
    Dseconds = (Dseconds >= 10) ? Dseconds : "0" + Dseconds;
    let  Dtime = Dminutes + ":" + Dseconds;
    console.log(seconds)

       setSongTime({...songTime,current:time,duration:Dtime})
       setMin({...min,cuent:secondss,duon:Ddminutes})
      

    }
   
    const [songTime,setSongTime] = useState({
        current : null,
        duration :null
    });
    const [min,setMin] = useState({
        current :null,
        duration:null
    })

    const updateTime = (e)=>{
        audioRef.current.currentTime = e.target.value;
        console.log(e.target.value)
        setMin({...min,cuent:e.target.value})

    }

    const skipFunction = (e)=>{
        let con =1;
     songs.forEach(e=>{
         con++;
     })
        
        const index = songs.findIndex(song => {
            return song.id === currentSong.id;
          });
          console.log(index)
          if(index+1>=1 &&index-1<=con){
      if(e.includes('back')){
          if(index>=1){
          setCurrentSong(songs[index-1])
          }
          if(index<1){
              setCurrentSong(songs[con-2])
          }   
     }
     else if(index>con-3){
         setCurrentSong(songs[1])
     }
    
      else if(index<con-2){
        setCurrentSong(songs[index+1])
     

      }
     
    }
    

    }
    useEffect(()=>{
        const newSongs = songs.map(song=>{
            if(song.id===currentSong.id){
                return{
                    ...song,
                    active:true,
                };}
            else{
                return{
                    ...song,
                    active:false,
                };
            }
            
            
            
        })
        setSongs(newSongs);
        
    })
    
    return(
    <div className="player">
        <div className="play"> <p>{songTime.current}</p>
        <input min={0} max={(min.duon)*60} value={min.cuent} type="range"  onChange={updateTime}/>
        <p>{songTime.duration}</p>
       
        </div>
        <div className="logos">
        <FontAwesomeIcon onClick={()=>skipFunction('skipback')} className="skipback"  icon={faAngleLeft} size='2x' />
        <FontAwesomeIcon className="play" onClick={playSong}  icon={isplaying ?faPause:faPlay} size='2x'/>
        <FontAwesomeIcon onClick={()=>skipFunction('skipfront')} className="skipfront" icon={faAngleRight} size='2x'  />
        <audio onTimeUpdate={timeUpdate} ref={audioRef} src={currentSong.audio} onLoadedMetadata={timeUpdate} type="audio/mpeg"></audio>
        </div>
       
    </div>
    );

}

export default Player;