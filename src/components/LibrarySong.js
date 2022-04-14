import React from "react";

const LibrarySong =({song,setCurrentSong,id,songs,audioref,setSongs})=>{
    const songSelector = (e)=>{
        const selSong =songs.filter((state)=>
          state.id===id

        )
        console.log(selSong)
        setCurrentSong(selSong[0]);
    
      
         const newSongs = songs.map(song=>{
            if(song.id===id){
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
        console.log(newSongs)
        setSongs(newSongs);
    }
       
   
    return(
        <div onClick={songSelector} className={`librarysongs ${song.active ?"Selected":"" }`}>
        <img src={song.cover} alt="" />
        <div className="flexsaver">
            <p>{song.name}</p>
            <p>{song.artist}</p>
            </div>
           
           
        </div>
        
        );
}

export default LibrarySong;